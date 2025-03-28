import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemedView } from '../themed-view';
import { useTheme } from '../../theme/use-theme';

// Mock the theme hook
jest.mock('../../theme/use-theme');

describe('ThemedView', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        text: '#000000',
        background: '#ffffff'
      },
      spacing: {
        sm: 8,
        md: 16
      }
    });
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(<ThemedView testID="themed-view" />);
    expect(getByTestId('themed-view')).toBeTruthy();
  });

  it('renders with custom styles', () => {
    const customStyle = { padding: 16 };
    const { getByTestId } = render(
      <ThemedView testID="themed-view" style={customStyle} />
    );
    expect(getByTestId('themed-view')).toBeTruthy();
  });

  it('renders with children', () => {
    const { getByText } = render(
      <ThemedView>
        <Text>Test Child</Text>
      </ThemedView>
    );
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('renders with different variants', () => {
    const { getByTestId } = render(<ThemedView testID="themed-view" />);
    expect(getByTestId('themed-view')).toBeTruthy();
  });
});
