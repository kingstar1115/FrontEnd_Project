import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useCallback } from "react";
import { ProviderRpcError, SwapType } from "types";

export const injected = new InjectedConnector({ supportedChainIds: [56] });

const BinanceSmartChainParams = {
  chainId: "0x38",
  chainName: "Binance Smart Chain",
  rpcUrls: ["https://bsc-dataseed1.binance.org"],
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorerUrls: ["https://bscscan.com"],
};
const useConnect = () => {
  const { activate, error, active, account, chainId } = useWeb3React();
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;
  const switchOrAddNetwork = useCallback(async (chainId: 56) => {
    const w = window as typeof window & { ethereum: any };
    try {
      await w.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    } catch (error) {
      if (
        (error as ProviderRpcError).code === 4902 ||
        (error as ProviderRpcError).code === -32603
      ) {
        try {
          await w.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [BinanceSmartChainParams]
          });
        } catch (error) { 
          console.log(error)
        }
      }
    }
  }, []);
  const connect = useCallback(() => activate(injected), [activate]);
  const balance = useCallback(() => getBalance(String(account)), [activate]);
  const getBalance = async (account:any) => {
    const w = window as typeof window & { ethereum: any };
    try {
      await w.ethereum.request({
        method: "eth_getBalance",
        params: [String(account)],
      });
    } catch (error) {
      console.log(error)
    }
  }

  const switchToBSC = useCallback(() => {

    switchOrAddNetwork(56);
  }, [switchOrAddNetwork]);

  return {
    account,
    chainId,
    connect,
    isUnsupportedChainIdError,
    active,
    switchToBSC,
    balance
  };
};

export default useConnect;