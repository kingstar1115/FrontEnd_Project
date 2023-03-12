import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLayerGroup,
  faCaretDown,
  faCaretRight,
  faArrowDown,
  faCog,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { COINSFROM, COINSTO, CONTRACT_ADDR } from "const/Consts";
import { shortenIfAddress } from "utils/address";
import { Trans } from "react-i18next";
import "./Swap.scss";
import { toastInfo } from "helpers/toast.helper";
import useConnect from "hooks/useConnect";
import { useBalances, useSwap, useTrade } from "hooks/useContract";
import { SwapType } from "types";
import erc20abi from "erc-20-abi";

export default function Swap() {
  const [openSelectFrom, setOpenSelectFrom] = useState(false);
  const [openSelectTo, setOpenSelectTo] = useState(false);
  const [coinFrom, setCoinFrom] = useState("BNB");
  const [tokenAmountFrom, setTokenAmountFrom] = useState(0);
  const [coinTo, setCoinTo] = useState("ALGO");
  const [tokenAmountTo, setTokenAmountTo] = useState(0);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [maxTokenFromAmount, setMaxTokenFromAmount] = useState(0);
  const [wallet, setWallet] = useState<string | null>(null);
  const [walletChainId, setChainId] = useState<string | null>(null);
  const {
    bnb,
    updateBnb,
    tokenBalance,
    updateTokenBalance,
    getTokenBalance,
  } = useBalances(56);
  const { swapTokens, loading, disabled, error } = useSwap(56);
  
  const {
    connect,
    isUnsupportedChainIdError,
    chainId,
    account,
    active,
    switchToBSC,
  } = useConnect();
  const {
    getTradeAmount,
    getOtherTradeAmount,
    rate,
    update: updateRate,
    tradeAmount,
  } = useTrade(56);

  const handleSwapToken = async () => {
    if (!validateInput()) {
      toastInfo("Input Invalid");
      return;
    }
    swapTokens(tokenAmountFrom, CONTRACT_ADDR[coinFrom], CONTRACT_ADDR[coinTo]).then((res) => {
      if (res) {
        updateBnb();
        updateTokenBalance();
      }
    });
  };
  const validateInput = () => {
    if (
      tokenAmountFrom == null ||
      tokenAmountFrom <= 0 ||
      tokenAmountFrom >= maxTokenFromAmount
    ) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    if(account) {
      localStorage.setItem("walletAddress", String(account));
      localStorage.setItem('chainId', String(chainId));
    }

    if(localStorage.getItem('walletAddress') !== null) {
      setWallet(String(localStorage.getItem('walletAddress')));
    }
    if(localStorage.getItem('chainId') !== null) {
      setChainId(String(localStorage.getItem('chainId')));
    }

    let _temp_max = 0;
    if (coinFrom === 'BNB') {
      _temp_max = (bnb > 0.001) ? bnb - 0.001 : 0;
      setMaxTokenFromAmount(_temp_max);
      getTradeAmount(tokenAmountFrom, CONTRACT_ADDR[coinFrom], CONTRACT_ADDR[coinTo]);
    } else {
      getTokenBalance(CONTRACT_ADDR[coinFrom], erc20abi);
      setMaxTokenFromAmount(tokenBalance);
      getOtherTradeAmount(tokenAmountFrom, CONTRACT_ADDR[coinFrom], CONTRACT_ADDR[coinTo]);
    }

    // disconnect
  }, [coinFrom, coinTo, bnb, tokenBalance, wallet, walletChainId]);
  useEffect(() => {
    if (tokenAmountFrom == 0) {
      setTokenAmountTo(0);
      return;
    }
    setTokenAmountTo(parseFloat(tradeAmount.toFixed(8)));
  }, [tokenAmountFrom, tradeAmount]);
  return (
    <div className="justify-between mx-auto w-[95%] lg:w-[90%] swap_form py-[150px] gap-[100px] flex-col md:flex-row items-center">
      <div className="max-w-[500px] text-left ml-[20px]">
        <p className="uppercase tracking-[1px] font-[700] text-[17px] text-white mb-[10px]">Coin Swap</p>
        <h2 className="text-[52px] text-white font-[700] leading-[60px] mb-[15px]">You can swap <span className="text-[#ff06b7]">Algos</span> here</h2>
        <p className="text-[18px] leading-[28px] text-[#ddd]">Take advantage now of our prices's and rewards.</p>
      </div>
      <div className="swap_form_content w-[90%] md:max-w-[450px]">
        <div className="swap_form_content_top">
          <div className="swap_control_left">
            {/* <span>Swap</span> */}
            {wallet && <span className="flex"><FontAwesomeIcon icon={faWallet} color="white" size="xs" style={{marginRight:"10px", border: "1px solid", borderRadius: "50%", padding: "3px"}}/>{shortenIfAddress(wallet)}</span>}
          </div>
          <div className="swap_contol_right">
            <div
              className="icon"
              onClick={() => {
                setOpenSettingModal(!openSettingModal);
              }}
            >
              <FontAwesomeIcon icon={faLayerGroup} color="white" size="xl" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faClock} color="white" size="xl" />
            </div>
          </div>
        </div>
        <div className="swap_form_content_ratebar">
          <span className="text-[20px]">{rate.toFixed(2)} </span>
          <span className="text-[12px]">{coinFrom}/{coinTo}</span>
        </div>
        <div className="swap_form_content_inner_form">
          <div className="form">
            <label htmlFor="">
              From ({"Max :" + maxTokenFromAmount.toFixed(5) + " " + coinFrom})
            </label>
            <div className="form_content">
              <input
                type="number"
                className="form_content_input"
                placeholder="0"
                min={0}
                value={tokenAmountFrom}
                onInput={(e: any) => {
                  setTokenAmountFrom(e.target.value);
                  let amount = 0;
                  if (e.target.value) {
                    amount = parseFloat(e.target.value);
                  }
                  if (coinFrom === "BNB") {
                    getTradeAmount(amount, CONTRACT_ADDR[coinFrom], CONTRACT_ADDR[coinTo]);
                  } else {
                    getOtherTradeAmount(amount, CONTRACT_ADDR[coinFrom], CONTRACT_ADDR[coinTo]);
                  }
                }}
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
              />
              <div className="form_content_select">
                <div
                  className="select_header"
                  style={{cursor: 'pointer'}}
                  onClick={() => setOpenSelectFrom(!openSelectFrom)}
                >
                  <span>{coinFrom}</span>
                  <FontAwesomeIcon
                    icon={openSelectFrom === true ? faCaretDown : faCaretRight}
                    color="white"
                    size="sm"
                    className="icon"
                  />
                </div>
                <div
                  className="select_content"
                  style={{ display: openSelectFrom ? "" : "none" }}
                >
                  <ul style={{cursor: 'pointer'}}>
                    {COINSFROM.map((coin, ind) => {
                      if (coinTo === coin) return;
                      return (
                        <li
                          key={ind}
                          onClick={() => {
                            setCoinFrom(coin);
                            setOpenSelectFrom(false);
                          }}
                        >
                          {coin}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swap_form_content_middle_bar">
          <a href="#">
            <FontAwesomeIcon icon={faArrowDown} color="white" size="lg" />
          </a>
        </div>
        <div className="swap_form_content_inner_form">
          <div className="form">
            <label htmlFor="">To</label>
            <div className="form_content">
              <input
                type="number"
                className="form_content_input"
                placeholder="0"
                min={0}
                value={tokenAmountTo}
                onInput={(e: any) => {
                  setTokenAmountTo(e.target.value);
                  let amount = 0;
                  if (e.target.value) {
                    amount = e.target.value;
                  }
                  // getTradeRate(amount)
                  setTokenAmountFrom(parseFloat((amount / rate).toFixed(8)))
                }}
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
              />
              <div className="form_content_select">
                <div
                  className="select_header"
                  style={{cursor: 'pointer'}}
                  onClick={() => setOpenSelectTo(!openSelectTo)}
                >
                  <span>{coinTo}</span>
                  <FontAwesomeIcon
                    icon={openSelectTo === true ? faCaretDown : faCaretRight}
                    color="white"
                    size="sm"
                    className="icon"
                  />
                </div>
                <div
                  className="select_content"
                  style={{ display: openSelectTo ? "" : "none" }}
                >
                  <ul style={{cursor: 'pointer'}}>
                    {COINSTO.map((coin, ind) => {
                      if (coinFrom === coin) return;
                      return (
                        <li
                          key={ind}
                          onClick={() => {
                            setCoinTo(coin);
                            setOpenSelectTo(false);
                          }}
                        >
                          {coin}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swap_form_content_btn">
          {wallet && !isUnsupportedChainIdError && walletChainId === '56' ? (
            <button onClick={() => handleSwapToken()}>
              <Trans i18nKey="text_swap">Swap</Trans>
            </button>
          ) : (
            <button
              onClick={() => {
                connect();
                switchToBSC();
              }}
            >
              <Trans i18nKey="text_connectwallet">Connect Wallet</Trans>
            </button>
          )}
        </div>
        <div className="modal">
          <div
            className={
              openSettingModal ? "modal_setting" : "modal_setting dis-none"
            }
          >
            <div className="modal_header">
              <FontAwesomeIcon
                icon={faCog}
                color="white"
                size="xl"
                className="icon"
              />
              <h3>Setting</h3>
            </div>
            <div className="modal_content">
              <div className="swap_set">
                <span>Default Transaction Speed</span>
                <ul>
                  <li>standard (6)</li>
                  <li>fast (7)</li>
                  <li>instant (8)</li>
                </ul>
              </div>
              <div className="swap_set">
                <span>Slippage Tolerance</span>
                <ul>
                  <li>0.1%</li>
                  <li>0.5%</li>
                  <li>1%</li>
                  <li>10%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
