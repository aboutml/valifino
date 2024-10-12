import { keccak256 } from 'js-sha3';
import { isString } from '../../utils/isString';

/**
 * Validates an Ethereum wallet address.
 *
 * This function checks if the provided address is a valid Ethereum address by verifying
 * its format and checksum.
 *
 * @param {string} address - The Ethereum wallet address to validate.
 * @returns {boolean} True if the address is valid, false otherwise.
 */
export function isValidEthereumWalletAddress(address: string): boolean {
  if (!isString(address) || !/^0x[0-9a-fA-F]{40}$/.test(address)) { // Check if it has the basic requirements of an address
    return false;
  }

  if (/^0x[0-9a-f]{40}$/.test(address) || /^0x[0-9A-F]{40}$/.test(address)) { // If it's all small caps or all caps, return true
    return true;
  }

  return verifyChecksum(address);
}

/**
 * Verifies the checksum of an Ethereum address.
 *
 * This function checks each character of the address to ensure it matches the expected
 * case (upper or lower) based on the address hash.
 *
 * @param {string} address - The Ethereum address to verify.
 * @returns {boolean} True if the checksum is valid, false otherwise.
 */
function verifyChecksum(address: string): boolean {
  address = address.replace('0x', ''); // Remove '0x' prefix

  const addressHash = keccak256(address.toLowerCase()); // Calculate the address hash

  for (let i = 0; i < 40; i++) {
    // The nth letter should be uppercase if the nth digit of addressHash is > 7
    if (
      (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])
    ) {
      return false;
    }
  }

  return true;
}
