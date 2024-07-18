import { isValidCVV, CardType } from '../../../src';

describe('validateCVV', () => {
  describe('#isValidCVV', () => {
    [
      {
        description: 'should return true for a valid Visa CVV',
        cvv: 123,
        cardType: CardType.Visa,
        expectedValue: true,
      },
      {
        description: 'should return true for a valid MasterCard CVV',
        cvv: 456,
        cardType: CardType.MasterCard,
        expectedValue: true,
      },
      {
        description: 'should return true for a valid Amex CVV',
        cvv: 1234,
        cardType: CardType.Amex,
        expectedValue: true,
      },
      {
        description: 'should return false for an invalid CVV length for Visa',
        cvv: 12,
        cardType: CardType.Visa,
        expectedValue: false,
      },
      {
        description: 'should return false for an invalid CVV length for Amex',
        cvv: 123,
        cardType: CardType.Amex,
        expectedValue: false,
      },
      {
        description: 'should return false for an unsupported card type',
        cvv: 123,
        cardType: 'UnsupportedCard' as CardType,
        expectedValue: false,
      },
    ].forEach(({ description, cvv, cardType, expectedValue }) => {
      it(description, () => {
        expect(isValidCVV(cvv, cardType)).toBe(expectedValue);
      });
    });
  });
});
