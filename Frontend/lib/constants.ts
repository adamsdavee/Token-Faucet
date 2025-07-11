export const CORE_TESTNET = {
  chainId: "0x45a", // 1114 in hex
  chainIdDecimal: 1114,
  name: "Core Testnet",
  nativeCurrency: {
    name: "tCORE",
    symbol: "tCORE",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.test2.btcs.network"],
  blockExplorerUrls: ["https://scan.test2.btcs.network"],
}

export const SUPPORTED_CHAINS = [CORE_TESTNET.chainIdDecimal]
