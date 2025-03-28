type CurrencyOptions = {
  currency?: string;
  locale?: string;
};

export function formatCurrency(
  amount: number,
  { currency = 'ARS', locale = 'es-AR' }: CurrencyOptions = {}
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
