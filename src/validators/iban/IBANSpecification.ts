import { Specification } from './Specification';

export class IBANSpecification implements Specification {
  countryCode: string;
  length: number;
  structure: string;
  example: string;
  private cachedRegex?: RegExp;

  constructor(
    countryCode: string,
    length: number,
    structure: string,
    example: string
  ) {
    this.countryCode = countryCode;
    this.length = length;
    this.structure = structure;
    this.example = example;
  }

  private parseStructure(structure: string): RegExp {
    const regex = structure
      .match(/(.{3})/g)!
      .map(block => {
        const pattern = block[0];
        const repeats = parseInt(block.slice(1), 10);
        let format: string;

        switch (pattern) {
          case 'A':
            format = '0-9A-Za-z';
            break;
          case 'B':
            format = '0-9A-Z';
            break;
          case 'C':
            format = 'A-Za-z';
            break;
          case 'F':
            format = '0-9';
            break;
          case 'L':
            format = 'a-z';
            break;
          case 'U':
            format = 'A-Z';
            break;
          case 'W':
            format = '0-9a-z';
            break;
          default:
            format = '';
            break;
        }

        return `([${format}]{${repeats}})`;
      })
      .join('');

    return new RegExp(`^${regex}$`);
  }

  private get regex(): RegExp {
    return (
      this.cachedRegex ||
      (this.cachedRegex = this.parseStructure(this.structure))
    );
  }

  private iso13616Prepare(iban: string): string {
    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0, 4);

    const A = 'A'.charCodeAt(0),
      Z = 'Z'.charCodeAt(0);

    return iban
      .split('')
      .map(n => {
        const code = n.charCodeAt(0);
        return code >= A && code <= Z ? (code - A + 10).toString() : n;
      })
      .join('');
  }

  private getCountryCode(iban: string): string {
    return iban.slice(0, 2);
  }

  private iso7064Mod97_10(iban: string): number {
    let remainder = iban;
    while (remainder.length > 2) {
      const block = remainder.slice(0, 9);
      remainder =
        (parseInt(block, 10) % 97).toString() + remainder.slice(block.length);
    }
    return parseInt(remainder, 10) % 97;
  }

  isValidIBAN(iban: string): boolean {
    return (
      this.length === iban.length &&
      this.countryCode === this.getCountryCode(iban) &&
      this.regex.test(iban.slice(4)) &&
      this.iso7064Mod97_10(this.iso13616Prepare(iban)) === 1
    );
  }

  isValidBBAN(bban: string): boolean {
    return this.length - 4 === bban.length && this.regex.test(bban);
  }
}
