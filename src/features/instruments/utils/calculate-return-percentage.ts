export function calculateReturnPercentage(
  lastPrice: number,
  closePrice: number
): number {
  if (closePrice === 0) return 0;
  return ((lastPrice - closePrice) / closePrice) * 100;
}
