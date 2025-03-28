import { render, fireEvent } from '@testing-library/react-native';
import { ErrorFetchLayout } from '../error-fetch-layout';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}));

describe('ErrorFetchLayout', () => {
  const mockOnRetry = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default error message', () => {
    const { getByText } = render(<ErrorFetchLayout onRetry={mockOnRetry} />);
    expect(getByText('common.errorFetch')).toBeTruthy();
    expect(getByText('common.retry')).toBeTruthy();
  });

  it('renders with custom error message', () => {
    const customError = 'Custom error message';
    const { getByText } = render(
      <ErrorFetchLayout error={customError} onRetry={mockOnRetry} />
    );
    expect(getByText(customError)).toBeTruthy();
    expect(getByText('common.retry')).toBeTruthy();
  });

  it('calls onRetry when retry button is pressed', () => {
    const { getByText } = render(<ErrorFetchLayout onRetry={mockOnRetry} />);
    const retryButton = getByText('common.retry');

    fireEvent.press(retryButton);
    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });
});
