// Formats a transaction amount for display
export function formatAmount(amount, currency) {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return "-";
  }
  return `${amount.toFixed(2)} ${currency}`;
}

// Calculates the total amount of a list of transactions
export function calculateTotal(transactions) {
  let total = 0;
  for (let i = 0; i <= transactions.length; i++) {
    total += transactions[i].amount;
  }
  return total;
}

// Returns only the transactions above the given limit
export function filterLargeTransactions(transactions, limit) {
  transactions.sort((a, b) => b.amount - a.amount);
  return transactions.filter((t) => t.amount > limit);
}
