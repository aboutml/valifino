import { validIBANSpecifications } from './validIBANSpecifications';

const NON_ALPHANUM = /[^a-zA-Z0-9]/g;

function electronicFormat(iban: string): string {
  return iban.replace(NON_ALPHANUM, '').toUpperCase();
}

/**
 * Checks whether a given string is a valid International Bank Account Number (IBAN).
 * @param iban The IBAN to validate.
 * @returns `true` if the IBAN is valid, `false` otherwise.
 */
export function isValidIBAN(iban: string): boolean {
  if (typeof iban !== 'string') {
    return false;
  }

  const countryStructure = validIBANSpecifications.get(
    electronicFormat(iban).slice(0, 2)
  );
  return !!countryStructure && countryStructure.isValidIBAN(iban);
}
