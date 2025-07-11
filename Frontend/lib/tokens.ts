export interface Token {
  name: string
  symbol: string
  address: string
  decimals: number
  color: string
  maxMint: number
}

export const tokens: Token[] = [
  {
    name: "Test DAI",
    symbol: "tDAI",
    address: "0x1234567890123456789012345678901234567890", // Placeholder address
    decimals: 18,
    color: "#F5AC37",
    maxMint: 10000,
  },
  {
    name: "Test USDC",
    symbol: "tUSDC",
    address: "0x2345678901234567890123456789012345678901", // Placeholder address
    decimals: 6,
    color: "#2775CA",
    maxMint: 10000,
  },
  {
    name: "Test USDT",
    symbol: "tUSDT",
    address: "0x3456789012345678901234567890123456789012", // Placeholder address
    decimals: 6,
    color: "#26A17B",
    maxMint: 10000,
  },
  {
    name: "Test WETH",
    symbol: "tWETH",
    address: "0x4567890123456789012345678901234567890123", // Placeholder address
    decimals: 18,
    color: "#627EEA",
    maxMint: 100,
  },
  {
    name: "Test WBTC",
    symbol: "tWBTC",
    address: "0x5678901234567890123456789012345678901234", // Placeholder address
    decimals: 8,
    color: "#F7931A",
    maxMint: 10,
  },
  {
    name: "Test LINK",
    symbol: "tLINK",
    address: "0x6789012345678901234567890123456789012345", // Placeholder address
    decimals: 18,
    color: "#375BD2",
    maxMint: 1000,
  },
]

// Easy to extend with more tokens:
// {
//   name: "Test WETH",
//   symbol: "tWETH",
//   address: "0x4567890123456789012345678901234567890123",
//   decimals: 18,
//   color: "#627EEA",
//   maxMint: 100
// }
