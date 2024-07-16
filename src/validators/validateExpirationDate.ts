/**
 * Validates the expiration date of a credit card.
 * @param expirationDate - The expiration date in the format MM/YY or MM/YYYY.
 * @returns True if the expiration date is valid, false otherwise.
 */
export function isValidExpirationDate(expirationDate: string): boolean {
  const shortFormat = /^\d{2}\/\d{2}$/; // MM/YY
  const longFormat = /^\d{2}\/\d{4}$/; // MM/YYYY

  if (!shortFormat.test(expirationDate) && !longFormat.test(expirationDate)) {
    return false;
  }

  // eslint-disable-next-line prefer-const
  let [month, year] = expirationDate.split('/').map(Number);

  if (year < 100) {
    year += 2000; // Convert YY to YYYY
  }

  if (month < 1 || month > 12) {
    return false;
  }

  const currentDate = new Date();
  const expiration = new Date(year, month - 1);

  return expiration >= currentDate;
}
