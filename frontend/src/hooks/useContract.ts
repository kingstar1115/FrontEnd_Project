import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther, parseEther } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useMemo, useState, useReducer } from "react";
import { toastInfo, toastError, toastSuccess } from "helpers/toast.helper";
import { SwapType } from "types";
import { ethers } from "ethers";
import { PANCAKE_ROUTER_ABI } from "abi/PancakeRouterContract";
import erc20abi from 'erc-20-abi';
import { useRefresh } from 'react-tidy'

const pancakeSwapFactoryAddress = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'; // PancakeSwap V2 factory
const PANCAKE_ROUTER_CONTRACT = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const BNB_CONTRACT = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const ALGO_CONTRACT = "0x2dA63e26978B27CA854bdFe33F9866AA7c99813D";

const liqABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "getPair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }];
// router function is for interacting with pancakeswap
const RouterContract = (library: any) => {
  return new ethers.Contract(PANCAKE_ROUTER_CONTRACT, PANCAKE_ROUTER_ABI, library?.getSigner()
  );
}
const PancakeFactory = (library: any) => {
  return new ethers.Contract(
    pancakeSwapFactoryAddress,
    liqABI,
    library?.getSigner()
  )
}

const GetContract = (contract: string, abi: any, library: any) => {
  return new ethers.Contract(
    contract,
    abi,
    library?.getSigner()
  )
}

const useForceRender = () => {
  const [, forceRender] = useReducer(x => !x, true)
  return forceRender
}

export const useCheckNetwork = (network: number) => {
  const { chainId } = useWeb3React<Web3Provider>();
  const isWrongNetwork = useMemo(
    () => !(network === chainId),
    [network, chainId]
  );
  return { isWrongNetwork };
};

export const useBalances = (network: number) => {
  const { library, account } = useWeb3React<Web3Provider>();

  const { isWrongNetwork } = useCheckNetwork(network);

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const refresh = useRefresh()

  const [bnb, setBnb] = useState(0);
  const [algo, setAlgo] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [tempdep, setTempDep] = useState(false);

  const [error, setError] = useState<Record<string, any> | undefined>(
    undefined
  );

  const getBnb = useCallback(async () => {
    if (isWrongNetwork) return;
    try {
      await library
        ?.getSigner()
        .getBalance()
        .then((balance) => formatEther(balance))
        .then((bnb) => setBnb(Number(bnb)))
        .catch((e) => {
          toastInfo('Cannot read bnb balance');
        });
    } catch (e) {
      setError(e as Record<string, any>);
    }
  }, [library, isWrongNetwork]);

  const getTokenBalance = useCallback(async (tokenContractAdd: string, tokenAbi: any) => {
    if (isWrongNetwork) return;
    try {
      const token = await GetContract(tokenContractAdd, tokenAbi, library)
        ?.balanceOf(account)
        .then((balance: any) => setTokenBalance(Number(formatEther(balance))))
        .catch((e: any) => {
          toastInfo('Cannot get tokens balance');
        });

    } catch (e) {
      setError(e as Record<string, any>);
    }
  }, [library, isWrongNetwork])

  useEffect(() => {
    getBnb();
    getTokenBalance(ALGO_CONTRACT, erc20abi)
  }, [getBnb, getTokenBalance]);
  const updateBnb = () => {
    getBnb();
  };
  const updateTokenBalance = () => {
    getTokenBalance(ALGO_CONTRACT, erc20abi);
  };

  return {
    bnb,
    updateBnb,
    getBnb,
    tokenBalance,
    updateTokenBalance,
    getTokenBalance,
    error
  };
};

export const useTrade = (network: number) => {
  const { library, account } = useWeb3React<Web3Provider>();

  const { isWrongNetwork } = useCheckNetwork(network);

  const [error, setError] = useState<Record<string, any> | undefined>(
    undefined
  );

  const [rate, setRate] = useState(1);
  const [tradeAmount, setTradeAmount] = useState(0);

  // const amountIn = "1e18";
  // const amountIn = ethers.utils.parseEther("1");
  const getTradeAmount = useCallback(async (amountIn: number, token0: string, token1: string) => {
    if (!account || isWrongNetwork) return;
    const amountEther = amountIn >= 0.000001 ? ethers.utils.parseEther((amountIn.toString())) : ethers.utils.parseEther('1');
    try {
      const pair = await GetContract(pancakeSwapFactoryAddress, liqABI, library)
        .getPair(token0, token1);
      if (pair) {
        const amounts = await GetContract(PANCAKE_ROUTER_CONTRACT, PANCAKE_ROUTER_ABI, library)
          .getAmountsOut(amountEther, [token0, token1]);
        setTradeAmount(Number(formatEther(amounts[1])));
        setRate(Number(formatEther(amounts[1])) / Number(formatEther(amounts[0])));
      }
    } catch (e) {
      console.log(e)
      setError(e as Record<string, any>);
    }
  }, [account, isWrongNetwork]);

  const getOtherTradeAmount = useCallback(async (amountIn: number, token0: string, token1: string) => {
    if (!account || isWrongNetwork) return;
    const amountEther = amountIn >= 0.000001 ? ethers.utils.parseEther((amountIn.toString())) : ethers.utils.parseEther('1');
    try {
      const pair = await GetContract(pancakeSwapFactoryAddress, liqABI, library)
        .getPair(token0, BNB_CONTRACT);
      if (pair) {
        const baseAmounts = await GetContract(PANCAKE_ROUTER_CONTRACT, PANCAKE_ROUTER_ABI, library)
          .getAmountsOut(amountEther, [token0, BNB_CONTRACT]);
        const amounts = await GetContract(PANCAKE_ROUTER_CONTRACT, PANCAKE_ROUTER_ABI, library)
          .getAmountsOut(baseAmounts[1], [BNB_CONTRACT, token1]);
        setTradeAmount(Number(formatEther(amounts[1])));
        setRate(Number(formatEther(amounts[1])) / Number(formatEther(baseAmounts[0])));
      }
    } catch (e) {
      console.log(e)
      setError(e as Record<string, any>);
    }
  }, [account, isWrongNetwork]);

  useEffect(() => {
    getTradeAmount(1, BNB_CONTRACT, ALGO_CONTRACT);
  }, [getTradeAmount]);

  const update = (amount: number, token0: string, token1: string) => {
    getTradeAmount(amount, token0, token1);
  };
  return { getTradeAmount, getOtherTradeAmount, update, error, rate, tradeAmount };
}

export const useSwap = (network: number) => {
  const { library, account } = useWeb3React<Web3Provider>();

  const { isWrongNetwork } = useCheckNetwork(network);

  const disabled = library === undefined || isWrongNetwork;

  const { bnb, updateBnb, updateTokenBalance, getBnb, getTokenBalance } = useBalances(network);

  const [error, setError] = useState<Record<string, any> | undefined>(
    undefined
  );

  const [loading, setLoading] = useState(false);


  const swapTokens = useCallback(
    async (amount: number, coinFrom: string, coinTo: string) => {
      let next = true;
      setLoading(true);
      if (!account || isWrongNetwork || (coinFrom === coinTo))
        return false;
      const wei = parseEther(String(amount));
      const contract = GetContract(PANCAKE_ROUTER_CONTRACT, PANCAKE_ROUTER_ABI, library);
      if (coinFrom === BNB_CONTRACT) {
        try {
          const tx = await contract.swapExactETHForTokens(0, [coinFrom, coinTo], account, Math.floor(Date.now() / 1000) + 60 * 20, { value: wei })
          await tx.wait();
          toastSuccess('Your request successed');
        } catch (error) {
          toastInfo("An error occurred");
          next = false;
        }
      } else {
        try {
          const tx = await contract.swapExactTokensForTokens(wei, 0, [coinFrom, coinTo], account, Math.floor(Date.now() / 1000) + 60 * 20);
          await tx.wait();
          toastSuccess('Your request successed');
        } catch (error) {
          console.log(error)
          toastInfo("An error occurred");
          next = false;
        }

      }
      return next;
    },
    [bnb]
  );
  return { swapTokens, loading, disabled, error };
};