export enum TokenProtocolType {
  "Native",
  "YearnV1",
  "YearnV2",
  "CurveGauge",
  "Curve",
  "AaveV1",
  "AaveV2",
  "AaveAMM",
  "UniswapV2",
  "UniswapV3",
  "Sushiswap",
  "Linkswap",
  "Compound",
  "Sushibar",
  "Cream"
}

export interface TokenComponent {
  token: Token;
  rate: string;
  type: TokenProtocolType;
}

export interface Token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
}

export interface TokenComponentsList {
  token: Token
  underlyingTokenComponents: TokenComponent[]
}