import { validIBANSpecifications } from './validIBANSpecifications';

const NON_ALPHANUM = /[^a-zA-Z0-9]/g;

function isString(value: unknown): boolean {
  return typeof value === 'string';
}

function electronicFormat(iban: string): string {
  return iban.replace(NON_ALPHANUM, '').toUpperCase();
}

/**
 * Checks whether a given string is a valid International Bank Account Number (IBAN).
 * @param {string} iban The IBAN to validate.
 * @returns `true` if the IBAN is valid, `false` otherwise.
 */
export function isValidIBAN(iban: string): boolean {
  if (!isString(iban)) {
    return false;
  }

  const countryStructure = validIBANSpecifications.get(
    electronicFormat(iban).slice(0, 2)
  );
  return !!countryStructure && countryStructure.isValidIBAN(iban);
}

/**
 * Checks if the provided BBAN (Basic Bank Account Number) is valid for a given country.
 *
 * @param {string} countryCode - The two-letter ISO country code.
 * @param {string} bban - The BBAN to validate.
 * @returns True if the BBAN is valid for the specified country, false otherwise.
 */
export function isValidBBAN(countryCode: string, bban: string): boolean {
  if (!isString(bban)) {
    return false;
  }

  const countryStructure = validIBANSpecifications.get(countryCode);
  return (
    !!countryStructure && countryStructure.isValidBBAN(electronicFormat(bban))
  );
}
