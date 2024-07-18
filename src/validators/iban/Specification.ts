export interface Specification {
  countryCode: string;
  length: number;
  structure: string;
  example: string;
  isValidIBAN(iban: string): boolean;
  isValidBBAN(bban: string): boolean;
}
