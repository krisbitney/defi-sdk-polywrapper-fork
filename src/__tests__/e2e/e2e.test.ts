import { Web3ApiClient } from "@web3api/client-js";
import { getProviders } from "./utils";
import { TokenComponentsList } from "./types";

jest.setTimeout(90000);

describe("Defi SDK e2e", () => {
  let client: Web3ApiClient;
  let ensUri: string;

  beforeAll(async () => {
    const { clientConfig } = await getProviders()
    client = new Web3ApiClient(clientConfig);
    ensUri = "ens/testnet/defisdk.eth"
  });

  it("replicates recipe tests", async () => {
    const testCases = [
        {
          address: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
          network: "MAINNET",
        },
        {
          address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
          network: "MAINNET"
        },
        {
          address: "0x0a965a4caf929338044c593d82d385c4c898d8c6",
          network: "MAINNET"
        },
        {
          address: "0x19d3364a399d251e894ac732651be8b0e4e85001",
          network: "MAINNET"
        },
        {
          address: "0x2994529c0652d127b7842094103715ec5299bbed",
          network: "MAINNET"
        },
        {
          address: "0x02d341ccb60faaf662bc0554d13778015d1b285c",
          network: "MAINNET"
        },
        {
          address: "0x028171bca77440897b824ca71d1c56cac55b68a3",
          network: "MAINNET"
        },
        {
          address: "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
          network: "MAINNET"
        }
      ];
    for (const variables of testCases) {
      const query = await client.query<{
        getComponents: TokenComponentsList;
      }>({
        uri: ensUri,
        query: `
          query {
            getComponents(
              address: $address
              connection: {
                node: null,
                networkNameOrChainId: $network
              }
            )
          }
        `,
        variables
      });
      expect(query.errors).toBeFalsy();
      expect(query.data).toBeTruthy();
      console.log(JSON.stringify(query.data?.getComponents));
    }
  });
});