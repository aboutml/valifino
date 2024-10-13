/**
 * Validates a transaction amount (up to 2 decimal places are allowed).
 * @param {number} amount - The transaction amount to validate.
 * @returns True if the transaction amount is valid, false otherwise.
 */
export function isValidTransactionAmount(amount: number): boolean {
  // Check if amount is a positive number
  if (amount <= 0 || !isFinite(amount)) {
    return false;
  }

  const decimalCount = (amount.toString().split('.')[1] || '').length;
  return decimalCount <= 2;
}
