import { isValidIBAN } from '../../../src';
import { validIBANSpecifications } from '../../../src/validators/iban/validIBANSpecifications';

describe('validateIBAN', () => {
  describe('#isValidIBAN', () => {
    it('should return false when input is not a String', () => {
      // @ts-ignore
      expect(isValidIBAN(1)).toBe(false);
      // @ts-ignore
      expect(isValidIBAN([])).toBe(false);
      // @ts-ignore
      expect(isValidIBAN({})).toBe(false);
      // @ts-ignore
      expect(isValidIBAN(true)).toBe(false);
    });

    it('should return false for an unknown country code digit', () => {
      expect(isValidIBAN('ZZ68539007547034')).toBe(false);
    });

    it('should return true for a valid belgian IBAN', () => {
      expect(isValidIBAN('BE68539007547034')).toBe(true);
    });

    it('should return true for a valid Dutch IBAN', () => {
      expect(isValidIBAN('NL86INGB0002445588')).toBe(true);
    });

    it('should return true for a valid Moldovan IBAN', () => {
      expect(isValidIBAN('MD75EX0900002374642125EU')).toBe(true);
    });

    it('should return true for a valid Saint-Lucia IBAN', () => {
      expect(isValidIBAN('LC55HEMM000100010012001200023015')).toBe(true);
    });

    it('should return false for an incorrect check digit', () => {
      expect(isValidIBAN('BE68539007547035')).toBe(false);
    });

    it('should return true for a valid Côte d\'Ivoire IBAN', () => {
      expect(isValidIBAN('CI93CI0080111301134291200589')).toBe(true);
    });

    it('should return true for all examples', () => {
      for (const spec of validIBANSpecifications.values()) {
        expect(isValidIBAN(spec.example)).toBe(true);
      }
    });

    it('should return false for all examples when modifying just one digit', () => {
      for (const spec of validIBANSpecifications.values()) {
        expect(
          isValidIBAN(
            `${spec.example.slice(0, -1)}${(parseInt(spec.example.slice(-1), 10) + 1) % 10}`
          )
        ).toBe(false);
      }
    });

    it('should return true for a valid Egypt IBAN', () => {
      expect(isValidIBAN('EG800002000156789012345180002')).toBe(true);
    });
  });
});
