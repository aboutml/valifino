import { CardType } from '../../types/CardType';

/**
 * Validates the CVV code for the given card type.
 * @param cvv - The CVV code to validate.
 * @param cardType - The type of the card (e.g., CardType.Visa, CardType.MasterCard).
 * @returns True if the CVV is valid, false otherwise.
 */
export function isValidCVV(cvv: number, cardType: CardType): boolean {
  const cvvRegex = {
    [CardType.Visa]: /^[0-9]{3}$/,
    [CardType.MasterCard]: /^[0-9]{3}$/,
    [CardType.Amex]: /^[0-9]{4}$/,
    [CardType.Discover]: /^[0-9]{3}$/,
    [CardType.JCB]: /^[0-9]{3}$/,
    [CardType.DinersClub]: /^[0-9]{3}$/,
  };

  const regex = cvvRegex[cardType];
  if (!regex) {
    return false;
  }

  return regex.test(cvv.toString());
}
