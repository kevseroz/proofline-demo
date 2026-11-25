// Formats a transaction amount for display
export function formatAmount(amount, currency) {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return "-";
  }
  return `${amount.toFixed(2)} ${currency}`;
}
