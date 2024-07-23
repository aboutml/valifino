/**
 * Validates if the given USA routing number is valid.
 * @param {true} routingNumber - The routing number to validate.
 * @returns True if the routing number is valid, false otherwise.
 */
export function isValidUSRoutingNumber(routingNumber: string): boolean {
  // Routing number must be a 9-digit number
  if (!/^\d{9}$/.test(routingNumber)) {
    return false;
  }

  // Calculate the checksum using the ABA routing number algorithm
  const digits = routingNumber.split('').map(Number);
  const checksum =
    3 * (digits[0] + digits[3] + digits[6]) +
    7 * (digits[1] + digits[4] + digits[7]) +
    1 * (digits[2] + digits[5] + digits[8]);

  // Valid routing numbers have a checksum that is a multiple of 10
  return checksum % 10 === 0;
}
