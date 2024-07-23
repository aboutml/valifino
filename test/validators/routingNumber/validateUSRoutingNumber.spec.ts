import { isValidUSRoutingNumber } from '../../../src';

describe('validateUSRoutingNumber', () => {
  describe('#isValidUSRoutingNumber', () => {
    it('should return true for valid routing numbers', () => {
      expect(isValidUSRoutingNumber('111000025')).toBe(true);
      expect(isValidUSRoutingNumber('021000021')).toBe(true);
    });

    it('should return false for invalid routing numbers', () => {
      expect(isValidUSRoutingNumber('111000026')).toBe(false); // Invalid checksum
      expect(isValidUSRoutingNumber('021000020')).toBe(false); // Invalid checksum
    });

    it('should return false for routing numbers with incorrect length', () => {
      expect(isValidUSRoutingNumber('11100002')).toBe(false); // Too short
      expect(isValidUSRoutingNumber('1110000255')).toBe(false); // Too long
    });

    it('should return false for non-numeric routing numbers', () => {
      expect(isValidUSRoutingNumber('11100002A')).toBe(false); // Contains a letter
      expect(isValidUSRoutingNumber('!21000021')).toBe(false); // Contains a special character
    });
  });
});
