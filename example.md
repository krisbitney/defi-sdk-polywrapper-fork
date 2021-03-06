# Examples
-----------------------------------
## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
      "name": "SushiBar",
      "symbol": "xSUSHI",
      "decimals": 18,
      "totalSupply": "68828762817907898982295808"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
          "name": "SushiToken",
          "symbol": "SUSHI",
          "decimals": 18,
          "totalSupply": "232539564055938576031638126"
        },
        "rate": "1.17693294712155593234",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------

## Query 
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x39aa39c021dfbae8fac545936693ac917d5e7563",
  "network": "MAINNET"
}
```

## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x39aa39c021dfbae8fac545936693ac917d5e7563",
      "name": "Compound USD Coin",
      "symbol": "cUSDC",
      "decimals": 8,
      "totalSupply": "21327836029366789834"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "name": "USD Coin",
          "symbol": "USDC",
          "decimals": 6,
          "totalSupply": "26023568159239550"
        },
        "rate": "0.0221388451824701",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------

## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x0a965a4caf929338044c593d82d385c4c898d8c6",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x0a965a4caf929338044c593d82d385c4c898d8c6",
      "name": "Uniswap V2",
      "symbol": "UNI-V2",
      "decimals": 18,
      "totalSupply": "3421511230657799317704"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8",
          "name": "Friends With Benefits Pro",
          "symbol": "FWB",
          "decimals": 18,
          "totalSupply": "1000000000000000000000000"
        },
        "rate": "4.73130428508401221638",
        "type": 0
      },
      {
        "token": {
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "name": "Wrapped Ether",
          "symbol": "WETH",
          "decimals": 18,
          "totalSupply": "7025353631329550976333864"
        },
        "rate": "0.25002581090618563345",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------
## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x19d3364a399d251e894ac732651be8b0e4e85001",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x19d3364a399d251e894ac732651be8b0e4e85001",
      "name": "DAI yVault",
      "symbol": "yvDAI",
      "decimals": 18,
      "totalSupply": "15252283361365664804894465"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "name": "Dai Stablecoin",
          "symbol": "DAI",
          "decimals": 18,
          "totalSupply": "5823545023317184156033278369"
        },
        "rate": "1.065502087607897698",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------
## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x2994529c0652d127b7842094103715ec5299bbed",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x2994529c0652d127b7842094103715ec5299bbed",
      "name": "yearn Curve.fi yDAI/yUSDC/yUSDT/yBUSD",
      "symbol": "yyDAI+yUSDC+yUSDT+yBUSD",
      "decimals": 18,
      "totalSupply": "353786341083841590828850"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "name": "Dai Stablecoin",
          "symbol": "DAI",
          "decimals": 18,
          "totalSupply": "5823545023317184156033278369"
        },
        "rate": "0.27372209476162160934168219870858142383571491721640064531",
        "type": 0
      },
      {
        "token": {
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "name": "USD Coin",
          "symbol": "USDC",
          "decimals": 6,
          "totalSupply": "26023568159239550"
        },
        "rate": "0.3617358847231736978506482882088541541540520119033636954",
        "type": 0
      },
      {
        "token": {
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "name": "Tether USD",
          "symbol": "USDT",
          "decimals": 6,
          "totalSupply": "33873006368948501"
        },
        "rate": "0.31082778575441285612601721121433881932765545976977381576",
        "type": 0
      },
      {
        "token": {
          "address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
          "name": "Binance USD",
          "symbol": "BUSD",
          "decimals": 18,
          "totalSupply": "12263491683870000000000000000"
        },
        "rate": "0.35135734564727790589934719797542789400395046060261148884",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------

## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x02d341ccb60faaf662bc0554d13778015d1b285c",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x02d341ccb60faaf662bc0554d13778015d1b285c",
      "name": "Curve.fi aDAI/aSUSD",
      "symbol": "saCRV",
      "decimals": 18,
      "totalSupply": "235589745267488733448347500"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "name": "Dai Stablecoin",
          "symbol": "DAI",
          "decimals": 18,
          "totalSupply": "5823545023317184156033278369"
        },
        "rate": "0.51251112358498763493",
        "type": 0
      },
      {
        "token": {
          "address": "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
          "name": "Synth sUSD",
          "symbol": "sUSD",
          "decimals": 18,
          "totalSupply": "307341897754168631413917776"
        },
        "rate": "0.5272598304490383626",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------
## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x028171bca77440897b824ca71d1c56cac55b68a3",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x028171bca77440897b824ca71d1c56cac55b68a3",
      "name": "Aave interest bearing DAI",
      "symbol": "aDAI",
      "decimals": 18,
      "totalSupply": "1660354380363355747293457441"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "name": "Dai Stablecoin",
          "symbol": "DAI",
          "decimals": 18,
          "totalSupply": "5823545023317184156033278369"
        },
        "rate": "1",
        "type": 0
      }
    ]
  }
}
```
## Query
```graphql
query GetComponents($address: String!) {
  getComponents(
    address: $address
    connection: {
      node: null,
      networkNameOrChainId: $network
    }
  )
}
```
## Input
```json
{
  "address": "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
  "network": "MAINNET"
}
```
## Output
```json
{
  "getComponents": {
    "token": {
      "address": "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
      "name": "Aave Interest bearing USDC",
      "symbol": "aUSDC",
      "decimals": 6,
      "totalSupply": "279125781051459"
    },
    "underlyingTokenComponents": [
      {
        "token": {
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "name": "USD Coin",
          "symbol": "USDC",
          "decimals": 6,
          "totalSupply": "26023568159239550"
        },
        "rate": "1",
        "type": 0
      }
    ]
  }
}
```
-----------------------------------
