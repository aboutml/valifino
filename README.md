# Valifino

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A comprehensive library of financial validators for Node.js, built using TypeScript. This library provides a set of functions to validate various financial instruments and formats such as credit card numbers, IBANs, SWIFT/BIC codes, and more.

![Valifino](./images/logo.png)

## Install

```bash
npm install valifino
```

## Features

- [Validate credit card numbers using the Luhn algorithm](#isvalidcreditcardnumbercardnumber-string-boolean)
- [Validate CVV codes for various card types](#isvalidcvvcardtype-string-cvv-string-boolean)
- [Validate expiration dates of credit cards](#isvalidexpirationdateexpirationdate-string-boolean)
- [Validate IBANs for multiple countries](#isvalidibaniban-string-boolean)
- [Validate BBANs for multiple countries](#isvalidbbancountrycode-string-bban-string-boolean)
- [Validate SWIFT/BIC codes](#isvalidswiftswiftcode-string-boolean)
- [Validate routing numbers](#isvalidusroutingnumberroutingnumber-string-boolean)
- [Validate currency codes](#isvalidcurrencycodecurrencycode-string-boolean)
- [Validate transaction amounts](#isvalidtransactionamountamount-number-boolean)
- Validate cryptocurrency addresses (e.g., Bitcoin, Ethereum) [To be done]

## API

### isValidCreditCardNumber(cardNumber: string): boolean

Validates a credit card number using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

**Example**:
```ts
import { isValidCreditCardNumber} from 'valifino';

/**
 * @param {string} cardNumber - The card number in string format.
 * @returns True if the card number is valid, false otherwise.
 */
isValidCreditCardNumber('4111111111111111'); // => true
```

### isValidCVV(cardType: string, cvv: string): boolean

Validates the CVV code of a credit card based on the card type.

**Example**:
```ts
import { isValidCVV } from 'valifino';

/**
 * Validates the CVV code for the given card type.
 * @param {string} cvv - The CVV code to validate.
 * @param {string} cardType - The type of the card (e.g., CardType.Visa, CardType.MasterCard).
 * @returns True if the CVV is valid, false otherwise.
 */
isValidCVV(123, 'Visa'); // => true
isValidCVV(432, 'Amex'); // => false
```

### isValidExpirationDate(expirationDate: string): boolean

Validates the expiration date of a credit card.

```ts
import { isValidExpirationDate } from 'valifino';

/**
 * @param {string} expirationDate - The expiration date in the format MM/YY or MM/YYYY.
 * @returns True if the expiration date is valid, false otherwise.
 */
isValidExpirationDate('12/2029'); // => true
isValidExpirationDate('01-2025'); // => false
```

### isValidIBAN(iban: string): boolean

Validates an International Bank Account Number (IBAN) for multiple countries.

```ts
import { isValidIBAN } from 'valifino';

/**
 * Checks whether a given string is a valid International Bank Account Number (IBAN).
 * @param {string} iban The IBAN to validate.
 * @returns `true` if the IBAN is valid, `false` otherwise.
 */
isValidIBAN('MD75EX0900002374642125EU'); // => true (Moldova IBAN)
isValidIBAN('BE68539007547035'); // => false (incorrect digit check)
````

### isValidBBAN(countryCode: string, bban: string): boolean

Validates a Basic Bank Account Number (BBAN) for multiple countries.

```ts
import { isValidBBAN } from './valifino';

/**
 * Checks if the provided BBAN (Basic Bank Account Number) is valid for a given country.
 *
 * @param {string} countryCode - The two-letter ISO country code.
 * @param {string} bban - The BBAN to validate.
 * @returns True if the BBAN is valid for the specified country, false otherwise.
 */
isValidBBAN('BE', '539007547034'); // => true (Belgium)
isValidBBAN('BE', 'ABC-0075470-34); // => false
```

### isValidSWIFT(swiftCode: string): boolean

Validates a SWIFT/BIC code.

```ts
import { isValidSWIFT } from 'valifino';

/**
 * Validates a SWIFT/BIC code.
 * @param {string} swiftCode - The SWIFT/BIC code to validate.
 * @returns True if the SWIFT/BIC code is valid, false otherwise.
 */
isValidSWIFT('DEUTDEFF'); // => true (Deutsche Bank)
isValidSWIFT('DEUTDEFF!'); // => false (invalid character)
```
### isValidUSRoutingNumber(routingNumber: string): boolean

Validates a US routing number with ABA algorithm.

```ts
import { isValidUSRoutingNumber } from 'valifino';

/**
 * Validates a US routing number.
 * @param {string} routingNumber - The US routing number to validate.
 * @returns True if the routing number is valid, false otherwise.
 */
isValidUSRoutingNumber('021000021'); // => true
isValidUSRoutingNumber('021000021!'); // => false (invalid character)
```

### isValidCurrencyCode(currencyCode: string): boolean

Validates a currency code based on the ISO 4217 standard.

```ts
import { isValidCurrencyCode } from 'valifino';

/**
 * Validates a currency code against the ISO 4217 standard.
 * @param {string} currencyCode - The currency code to validate.
 * @returns True if the currency code is valid, false otherwise.
 */
isValidCurrencyCode('USD'); // => true
isValidCurrencyCode('XYZ'); // => false
```

### isValidTransactionAmount(amount: number): boolean

Validates a transaction amount (up to 3 decimal places are allowed).

```ts
import { isValidTransactionAmount } from 'valifino';

/**
 * Validates a transaction amount (up to 3 decimal places are allowed).
 * @param {number} amount - The transaction amount to validate.
 * @returns True if the transaction amount is valid, false otherwise.
 */
isValidTransactionAmount(100.0); // => true
isValidTransactionAmount(100.1234); // => false
isValidTransactionAmount(-50.00); // => false
```

### isValidCryptoAddress [TBD]

[build-img]:https://github.com/aboutml/valifino/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/aboutml/valifino/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/valifino
[downloads-url]:https://www.npmtrends.com/valifino
[npm-img]:https://img.shields.io/npm/v/valifino
[npm-url]:https://www.npmjs.com/package/valifino
[issues-img]:https://img.shields.io/github/issues/aboutml/valifino
[issues-url]:https://github.com/aboutml/valifino/issues
[codecov-img]:https://codecov.io/gh/aboutml/valifino/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/aboutml/valifino
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
