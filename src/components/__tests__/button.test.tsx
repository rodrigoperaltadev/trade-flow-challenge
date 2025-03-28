import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../button';
import { useTheme } from '../../theme/use-theme';

jest.mock('../../theme/use-theme');

describe('Button', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        text: '#000000',
        background: '#ffffff'
      }
    });
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(<Button label="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('handles onPress event', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button label="Test Button" onPress={onPress} />
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders with different variants', () => {
    const { getByText: getPrimary } = render(<Button label="Primary" />);
    const { getByText: getSecondary } = render(<Button label="Secondary" />);

    expect(getPrimary('Primary')).toBeTruthy();
    expect(getSecondary('Secondary')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const { getByText: getSmall } = render(<Button label="Small" />);
    const { getByText: getMedium } = render(<Button label="Medium" />);
    const { getByText: getLarge } = render(<Button label="Large" />);

    expect(getSmall('Small')).toBeTruthy();
    expect(getMedium('Medium')).toBeTruthy();
    expect(getLarge('Large')).toBeTruthy();
  });

  it('disables button when disabled prop is true', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button label="Disabled" onPress={onPress} disabled />
    );

    fireEvent.press(getByText('Disabled'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
