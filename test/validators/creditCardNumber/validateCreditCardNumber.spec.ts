import { isValidCreditCardNumber } from '../../../src';

describe('validateCreditCardNumber', () => {
  describe('#isValidCreditCardNumber', () => {
    [
      {
        cardNumber: '4111111111111111',
        description: 'should return true for a valid Visa card number',
        expectedValue: true,
      },
      {
        cardNumber: '5500000000000004',
        description: 'should return true for a valid MasterCard number',
        expectedValue: true,
      },
      {
        cardNumber: '1234567890123456',
        description: 'should return false for an invalid card number',
        expectedValue: false,
      },
      {
        cardNumber: '411111111111111',
        description: 'should return false for a card number with invalid length',
        expectedValue: false,
      },
      {
        cardNumber: '4111111111111abc',
        description: 'should return false for a card number with letters',
        expectedValue: false,
      },
    ].forEach(({ cardNumber, description, expectedValue }) => {
      it(description, () => {
        expect(isValidCreditCardNumber(cardNumber)).toBe(expectedValue);
      });
    });
  });
});
