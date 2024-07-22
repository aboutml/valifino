/**
 * Checks if the input is a string.
 * @param {unknown} value - The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export function isString(value: unknown): boolean {
  return typeof value === 'string';
}
