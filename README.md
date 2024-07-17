# Valifino

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A comprehensive library of financial validators for Node.js, built using TypeScript. This library provides a set of functions to validate various financial instruments and formats such as credit card numbers, IBANs, SWIFT/BIC codes, and more.


## Install

```bash
npm install valifino
```

## Features

- Validate credit card numbers using the Luhn algorithm
- Validate CVV codes for various card types
- Validate expiration dates of credit cards
- Validate IBANs for multiple countries [TBD]
- Validate SWIFT/BIC codes [TBD]
- Validate routing numbers (e.g., ABA routing numbers) [TBD]
- Validate bank account numbers [TBD]
- Validate currency codes
- Validate transaction amounts [TBD]
- Validate cryptocurrency addresses (e.g., Bitcoin, Ethereum) [TBD]

## API

### isValidCreditCardNumber(cardNumber: string): boolean

Validates a credit card number using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

**Example**:
```ts
import { isValidCreditCardNumber} from 'valifino';

/**
 * @param cardNumber - The card number in string format.
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
 * @param cvv - The CVV code to validate.
 * @param cardType - The type of the card (e.g., CardType.Visa, CardType.MasterCard).
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
 * @param expirationDate - The expiration date in the format MM/YY or MM/YYYY.
 * @returns True if the expiration date is valid, false otherwise.
 */
isValidExpirationDate('12/2029'); // => true
isValidExpirationDate('01-2025'); // => false
```

### isValidIBAN [TBD]
### isValidSWIFTBIC [TBD]
### isValidRoutingNumber [TBD]
### isValidAccountNumber [TBD]
### isValidCurrencyCode(currencyCode: string): boolean

Validates a currency code based on the ISO 4217 standard.

```ts
import { isValidCurrencyCode } from 'valifino';

/**
 * Validates a currency code against the ISO 4217 standard.
 * @param currencyCode - The currency code to validate.
 * @returns True if the currency code is valid, false otherwise.
 */
isValidCurrencyCode('USD'); // => true
isValidCurrencyCode('XYZ'); // => false
```

### isValidTransactionAmount [TBD]
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
