import { isValidTransactionAmount } from '../../../src';

describe('validateTransactionAmount', () => {
  describe('#isValidTransactionAmount', () => {
    it('should return true for valid transaction amounts', () => {
      expect(isValidTransactionAmount(100.0)).toBe(true); // 2 decimal places
      expect(isValidTransactionAmount(100)).toBe(true); // no decimal places
      expect(isValidTransactionAmount(49.9)).toBe(true); // 1 decimal place
    });

    it('should return false for invalid transaction amounts', () => {
      expect(isValidTransactionAmount(-100.0)).toBe(false); // negative amount
      expect(isValidTransactionAmount(49.999)).toBe(false); // 3 decimal places
      expect(isValidTransactionAmount(49.9999)).toBe(false); // 4 decimal places
    });

    it('should return false for non-finite numbers', () => {
      expect(isValidTransactionAmount(NaN)).toBe(false);
      expect(isValidTransactionAmount(Infinity)).toBe(false);
    });
  });
});
