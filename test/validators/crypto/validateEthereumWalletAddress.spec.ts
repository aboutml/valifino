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

    it('should return false for an address with a checksum mismatch', () => {
      expect(isValidEthereumWalletAddress('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BaeG')).toBe(false);
    });
  });
});
