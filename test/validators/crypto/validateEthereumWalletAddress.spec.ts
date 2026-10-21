import { isValidEthereumWalletAddress } from "../../../src";

describe('validateEthereumWalletAddress', () => {
  describe('#isValidEthereumWalletAddress', () => {
    it('should return true for a valid mixed-case address', () => {
      expect(isValidEthereumWalletAddress('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe')).toBe(true);
    });

    it('should return true for a valid lowercase address', () => {
      expect(isValidEthereumWalletAddress('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae')).toBe(true);
    });

    it('should return true for a valid uppercase address', () => {
      expect(isValidEthereumWalletAddress('0xDE0B295669A9FD93D5F28D9EC85E40F4CB697BAE')).toBe(true);
    });

    it('should return false for an address that is too short', () => {
      expect(isValidEthereumWalletAddress('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BA')).toBe(false);
    });

    it('should return false for an address with invalid characters', () => {
      expect(isValidEthereumWalletAddress('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAeg')).toBe(false);
    });

    it('should return false for an address without 0x prefix', () => {
      expect(isValidEthereumWalletAddress('de0B295669a9FD93d5F28D9Ec85E40f4cb697BAe')).toBe(false);
    });

    it('should return false for an address that is too long', () => {
      expect(isValidEthereumWalletAddress('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe0')).toBe(false);
    });

    it('should return false for a non-string value', () => {
      expect(isValidEthereumWalletAddress(undefined as unknown as string)).toBe(false);
      expect(isValidEthereumWalletAddress(null as unknown as string)).toBe(false);
      expect(isValidEthereumWalletAddress(123 as unknown as string)).toBe(false);
    });

    it('should return false for an empty string', () => {
      expect(isValidEthereumWalletAddress('')).toBe(false);
    });

    it('should return false for a mixed-case address where a letter should be uppercase', () => {
      // 4th character "B" lowered to "b" while its hash digit requires uppercase
      expect(isValidEthereumWalletAddress('0xde0b295669a9FD93d5F28D9Ec85E40f4cb697BAe')).toBe(false);
    });

    it('should return false for a mixed-case address where a letter should be lowercase', () => {
      // 1st character "d" raised to "D" while its hash digit requires lowercase
      expect(isValidEthereumWalletAddress('0xDe0B295669a9FD93d5F28D9Ec85E40f4cb697BAe')).toBe(false);
    });

    it('should return true for other valid checksummed addresses', () => {
      expect(isValidEthereumWalletAddress('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed')).toBe(true);
      expect(isValidEthereumWalletAddress('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359')).toBe(true);
    });
  });
});
