import { render } from '@testing-library/react-native';
import InstrumentsScreen from '../instruments-screen';
import { useInstruments } from '../../hooks/use-instruments';

jest.mock('../../hooks/use-instruments');
jest.mock('../../../../components/percentage-indicator', () => ({
  PercentageIndicator: () => null
}));
jest.mock('../../components/order-modal', () => () => null);

const mockInstruments = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    last_price: 150.0,
    currency: 'USD',
    price_change_percentage: 1.5
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    last_price: 2800.0,
    currency: 'USD',
    price_change_percentage: -0.5
  }
];

describe('InstrumentsScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (useInstruments as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null
    });

    const { getByTestId } = render(<InstrumentsScreen />);
    expect(getByTestId('instruments-loading-view')).toBeTruthy();
  });

  it('renders error state', () => {
    (useInstruments as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Failed to fetch')
    });

    const { getByText } = render(<InstrumentsScreen />);
    expect(getByText('common.errorFetch')).toBeTruthy();
    expect(getByText('common.retry')).toBeTruthy();
  });

  it('renders instruments list', () => {
    (useInstruments as jest.Mock).mockReturnValue({
      data: mockInstruments,
      isLoading: false,
      error: null
    });

    const { getByTestId } = render(<InstrumentsScreen />);
    expect(getByTestId('instruments-list-view')).toBeTruthy();
  });
});
