import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from '../search-screen';
import { useSearch } from '../../hooks/useSearch';

jest.mock('../../hooks/useSearch');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}));

const mockSearchResults = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    last_price: 150.0,
    currency: 'USD'
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    last_price: 2800.0,
    currency: 'USD'
  }
];

describe('SearchScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (useSearch as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null
    });

    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('search-loading-view')).toBeTruthy();
  });

  it('renders error state', () => {
    (useSearch as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Failed to fetch')
    });

    const { getByTestId, getByText } = render(<SearchScreen />);
    expect(getByTestId('search-error-view')).toBeTruthy();
    expect(getByText('search.error')).toBeTruthy();
  });

  it('renders empty state', () => {
    (useSearch as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null
    });

    const { getByTestId, getByText } = render(<SearchScreen />);
    expect(getByTestId('search-empty-view')).toBeTruthy();
    expect(getByText('search.noResults')).toBeTruthy();
  });

  it('renders search results', () => {
    (useSearch as jest.Mock).mockReturnValue({
      data: mockSearchResults,
      isLoading: false,
      error: null
    });

    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('search-results-list')).toBeTruthy();
  });

  it('handles search input', () => {
    (useSearch as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null
    });

    const { getByTestId } = render(<SearchScreen />);
    const input = getByTestId('search-input');

    fireEvent.changeText(input, 'AAPL');
    expect(input.props.value).toBe('AAPL');
  });
});
