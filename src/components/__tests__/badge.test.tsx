import { Badge, BadgeSeverity } from '../badge';
import { render } from '@testing-library/react-native';

describe('Badge', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Badge value="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('renders with different severities', () => {
    const { getByText: getSuccess } = render(
      <Badge value="Success" severity={BadgeSeverity.SUCCESS} />
    );
    const { getByText: getError } = render(
      <Badge value="Error" severity={BadgeSeverity.ERROR} />
    );
    const { getByText: getInfo } = render(
      <Badge value="Info" severity={BadgeSeverity.INFO} />
    );

    expect(getSuccess('Success')).toBeTruthy();
    expect(getError('Error')).toBeTruthy();
    expect(getInfo('Info')).toBeTruthy();
  });
});
