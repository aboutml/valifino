import { isValidCurrencyCode } from '../../../src';

describe('validateCurrencyCode', () => {
  describe('isValidCurrencyCode', () => {
    it('should return true for valid currency codes', () => {
      expect(isValidCurrencyCode('USD')).toBe(true);
      expect(isValidCurrencyCode('eur')).toBe(true); // case insensitive
      expect(isValidCurrencyCode('JPY')).toBe(true);
    });

    it('should return false for invalid currency codes', () => {
      expect(isValidCurrencyCode('ABC')).toBe(false);
      expect(isValidCurrencyCode('XYZ')).toBe(false);
      expect(isValidCurrencyCode('EURO')).toBe(false); // invalid length
    });

    it('should return false for malformed currency codes', () => {
      expect(isValidCurrencyCode('')).toBe(false); // empty string
      expect(isValidCurrencyCode('123')).toBe(false); // numeric
      expect(isValidCurrencyCode('usd ')).toBe(false); // trailing space
    });
  });
});
