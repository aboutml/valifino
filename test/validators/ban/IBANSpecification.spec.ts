import { IBANSpecification } from '../../../src/validators/ban/IBANSpecification';
import { validIBANSpecifications } from '../../../src/validators/ban/validIBANSpecifications';

describe('IBANSpecification', () => {
  describe('#isValidIBAN', () => {
    const ibanSpec: IBANSpecification = new IBANSpecification('AD', 24, 'F04F04A12', 'AD1200012030200359100100');

    it('should return true for a valid IBAN', () => {
      expect(ibanSpec.isValidIBAN('AD1200012030200359100100')).toBe(true);
    });

    it('should return false for an invalid IBAN with incorrect length', () => {
      expect(ibanSpec.isValidIBAN('AD120001203020035910010')).toBe(false);
    });

    it('should return false for an invalid IBAN with incorrect format', () => {
      expect(ibanSpec.isValidIBAN('AD12X0012030200359100100')).toBe(false);
    });

    it('should return false for an invalid IBAN with incorrect check digits', () => {
      expect(ibanSpec.isValidIBAN('AD1200012030200359100101')).toBe(false);
    });

    it('should return true for all spec examples', () => {
      for (const spec of validIBANSpecifications.values()) {
        expect(spec.isValidIBAN(spec.example)).toBe(true);
      }
    });
  });
});
