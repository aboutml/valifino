import { isString } from '../../src/utils/isString'; // Adjust the import path as needed

describe('#isString', () => {
  it('should return true for string inputs', () => {
    expect(isString('')).toBe(true); // Empty string
    expect(isString('Hello, world!')).toBe(true); // Non-empty string
  });

  it('should return false for non-string inputs', () => {
    expect(isString(123)).toBe(false); // Number
    expect(isString(null)).toBe(false); // Null
    expect(isString(undefined)).toBe(false); // Undefined
    expect(isString({})).toBe(false); // Object
    expect(isString([])).toBe(false); // Array
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isString(() => {})).toBe(false); // Function
    expect(isString(true)).toBe(false); // Boolean
    expect(isString(new String('Hello'))).toBe(false); // String object
  });
});
