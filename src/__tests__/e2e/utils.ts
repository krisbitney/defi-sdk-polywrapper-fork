import { ClientConfig } from "@web3api/client-js";
import { ethereumPlugin } from "@web3api/ethereum-plugin-js";
import { ipfsPlugin } from "@web3api/ipfs-plugin-js";
import { ensPlugin } from "@web3api/ens-plugin-js";
import axios from "axios";

interface TestEnvironment {
  ipfs: string;
  ethereum: string;
  ensAddress: string;
  clientConfig: ClientConfig;
}

export async function getProviders(): Promise<TestEnvironment> {
  const { data: { ipfs, ethereum }, } = await axios.get("http://localhost:4040/providers");
  const { data } = await axios.get("http://localhost:4040/deploy-ens");
  const clientConfig: ClientConfig = getPlugins(ethereum, ipfs, data.ensAddress);
  return { ipfs, ethereum, ensAddress: data.ensAddress, clientConfig, };
}

export function getPlugins(ethereum: string, ipfs: string, ensAddress: string): ClientConfig {
  return {
    plugins: [
      {
        uri: "w3://ens/ipfs.web3api.eth",
        plugin: ipfsPlugin({ provider: ipfs }),
      },
      {
        uri: "w3://ens/ens.web3api.eth",
        plugin: ensPlugin({ addresses: { testnet: ensAddress } }),
      },
      {
        uri: "w3://ens/ethereum.web3api.eth",
        plugin: ethereumPlugin({
          networks: {
            MAINNET: {
              provider: "http://localhost:8546"
            },
            testnet: {
              provider: ethereum
            },
          },
          defaultNetwork: "testnet"
        }),
      },
    ],
  };
}