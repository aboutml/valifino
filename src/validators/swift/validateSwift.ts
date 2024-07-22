import { isString } from '../../utils/isString';

/**
 * Checks if the provided SWIFT/BIC code is valid.
 *
 * @param {string} swiftCode - The SWIFT/BIC code to validate.
 * @returns True if the SWIFT/BIC code is valid, false otherwise.
 *
 * @example
 * ```
 * const isValid = isValidSWIFT('DEUTDEFF');
 * console.log(isValid); // true
 *
 * const isValidInvalid = isValidSWIFT('INVALID');
 * console.log(isValidInvalid); // false
 * ```
 */
export function isValidSWIFT(swiftCode: string): boolean {
  if (!isString(swiftCode)) {
    return false;
  }

  const swiftBicRegex = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
  return swiftBicRegex.test(swiftCode);
}
