/**
 * @param {string} creditCardNumber - The card number in string format.
 * @returns True if the card number is valid, false otherwise.
 */
export function isValidCreditCardNumber(creditCardNumber: string): boolean {
  const digits = creditCardNumber.replace(/\D/g, '').split('').map(Number);

  let sum = 0;
  let isSecond = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isSecond = !isSecond;
  }

  return sum % 10 === 0;
}
