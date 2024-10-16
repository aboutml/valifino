import { validCurrencyCodes } from './currencyCodes';

/**
 * Validates a currency code against the ISO 4217 standard.
 * @param {string} currencyCode - The currency code to validate.
 * @returns True if the currency code is valid, false otherwise.
 */
export function isValidCurrencyCode(currencyCode: string): boolean {
  return validCurrencyCodes.has(currencyCode.toUpperCase());
}
