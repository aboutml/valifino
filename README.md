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
- Validate CVV codes for various card types [TBD]
- Validate expiration dates of credit cards [TBD]
- Validate IBANs for multiple countries [TBD]
- Validate SWIFT/BIC codes [TBD]
- Validate routing numbers (e.g., ABA routing numbers) [TBD]
- Validate bank account numbers [TBD]
- Validate currency codes [TBD]
- Validate transaction amounts [TBD]
- Validate cryptocurrency addresses (e.g., Bitcoin, Ethereum) [TBD]

## API

### isValidCreditCardNumber(cardNumber: string): boolean

Validates a credit card number using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

**Example**:
```ts
import { isValidCreditCardNumber} from 'valifino';

isValidCreditCardNumber('4111111111111111'); // => true
```

### isValidCVV [TBD]
### isValidExpirationDate [TBD]
### isValidIBAN [TBD]
### isValidSWIFTBIC [TBD]
### isValidRoutingNumber [TBD]
### isValidAccountNumber [TBD]
### isValidCurrencyCode [TBD]
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
