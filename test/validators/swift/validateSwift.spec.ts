import { isValidSWIFT } from '../../../src';

describe('validateSWIFT', () => {
  describe('#isValidSWIFTBIC', () => {
    it('should return true for valid 8-character SWIFT/BIC codes', () => {
      expect(isValidSWIFT('DEUTDEFF')).toBe(true); // Deutsche Bank, Germany
      expect(isValidSWIFT('BNPAFRPP')).toBe(true); // BNP Paribas, France
    });

    it('should return true for valid 11-character SWIFT/BIC codes', () => {
      expect(isValidSWIFT('DEUTDEFF500')).toBe(true); // Deutsche Bank, Germany (Branch)
      expect(isValidSWIFT('BNPAFRPPXXX')).toBe(true); // BNP Paribas, France (Primary office)
    });

    it('should return false for SWIFT/BIC codes with invalid length', () => {
      expect(isValidSWIFT('DEUTDE')).toBe(false); // Too short
      expect(isValidSWIFT('DEUTDEFF5000')).toBe(false); // Too long
    });

    it('should return false for SWIFT/BIC codes with invalid characters', () => {
      expect(isValidSWIFT('D1UTDE1F')).toBe(false); // Digit in institution code
      expect(isValidSWIFT('DEUTDEFF!')).toBe(false); // Invalid character
    });

    it('should return false for non-string inputs', () => {
      expect(isValidSWIFT(12345678 as any)).toBe(false); // Number input
      expect(isValidSWIFT(null as any)).toBe(false); // Null input
      expect(isValidSWIFT(undefined as any)).toBe(false); // Undefined input
      expect(isValidSWIFT({} as any)).toBe(false); // Object input
    });
  });
});
