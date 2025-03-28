import { formatCurrency } from './formatters';

describe('formatCurrency', () => {
  it('should format currency', () => {
    const formatted = formatCurrency(1000);
    expect(formatted.replace(/\s/g, ' ')).toBe('$ 1.000,00');
  });
});
