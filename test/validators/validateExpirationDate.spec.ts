import { isValidExpirationDate } from '../../src';

describe('validateExpirationDate', () => {
  describe('isValidExpirationDate', () => {
    it('should return true for a valid expiration date in MM/YY format', () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      const month = String(futureDate.getMonth() + 1).padStart(2, '0');
      const year = String(futureDate.getFullYear()).slice(-2);

      expect(isValidExpirationDate(`${month}/${year}`)).toBe(true);
    });

    it('should return true for a valid expiration date in MM/YYYY format', () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      const month = String(futureDate.getMonth() + 1).padStart(2, '0');
      const year = futureDate.getFullYear();

      expect(isValidExpirationDate(`${month}/${year}`)).toBe(true);
    });

    it('should return false for an invalid month', () => {
      expect(isValidExpirationDate('13/25')).toBe(false);
      expect(isValidExpirationDate('00/25')).toBe(false);
    });

    it('should return false for a past expiration date', () => {
      expect(isValidExpirationDate('01/20')).toBe(false);
    });

    it('should return false for an incorrectly formatted date', () => {
      expect(isValidExpirationDate('0125')).toBe(false);
      expect(isValidExpirationDate('01-25')).toBe(false);
      expect(isValidExpirationDate('1/25')).toBe(false);
    });
  });
});
