import { render } from '@testing-library/react-native';
import PortfolioScreen from '../portfolio-screen';
import { usePortfolio } from '../../hooks/usePorfolio';

jest.mock('../../hooks/usePorfolio');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}));

const mockPortfolioItems = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    quantity: 10,
    averagePrice: 150.0,
    currentPrice: 160.0,
    currency: 'USD'
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 5,
    averagePrice: 2800.0,
    currentPrice: 2900.0,
    currency: 'USD'
  }
];

describe('PortfolioScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (usePortfolio as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null
    });

    const { getByTestId } = render(<PortfolioScreen />);
    expect(getByTestId('portfolio-loading-view')).toBeTruthy();
  });

  it('renders error state', () => {
    (usePortfolio as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Failed to fetch')
    });

    const { getByText } = render(<PortfolioScreen />);
    expect(getByText('common.errorFetch')).toBeTruthy();
    expect(getByText('common.retry')).toBeTruthy();
  });

  it('renders portfolio list', () => {
    (usePortfolio as jest.Mock).mockReturnValue({
      data: mockPortfolioItems,
      isLoading: false,
      error: null
    });

    const { getByTestId } = render(<PortfolioScreen />);
    expect(getByTestId('portfolio-list-view')).toBeTruthy();
  });
});
