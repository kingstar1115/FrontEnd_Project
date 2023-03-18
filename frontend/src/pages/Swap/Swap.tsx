import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import axios from "axios";
import {
  faClock,
  faLayerGroup,
  faCaretDown,
  faCaretRight,
  faArrowDown,
  faCog,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { COINSFROM, COINSFROMNEW, COINSTO, CONTRACT_ADDR } from "const/Consts";
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
  const [changeToken, setChangeToken] = useState(0);
  const [openSelectTo, setOpenSelectTo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [coinFrom, setCoinFrom] = useState(COINSFROMNEW[0]);
  const [tokenAmountFrom, setTokenAmountFrom] = useState(0);
  const [coinTo, setCoinTo] = useState(COINSFROMNEW[0]);
  const [tokenAmountTo, setTokenAmountTo] = useState(0);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [maxTokenFromAmount, setMaxTokenFromAmount] = useState(0);
  const [wallet, setWallet] = useState<string | null>(null);
  const [walletChainId, setChainId] = useState<string | null>(null);
  const [prices, setPrices] = useState(0);
  const { bnb, updateBnb, tokenBalance, updateTokenBalance, getTokenBalance } =
    useBalances(56);
  const { swapTokens, loading, disabled, error } = useSwap(56);

  const {
    connect,
    disconnect,
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
    swapTokens(
      tokenAmountFrom,
      CONTRACT_ADDR[coinFrom.ticker],
      CONTRACT_ADDR[coinTo.ticker]
    ).then((res) => {
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
    if (account) {
      localStorage.setItem("walletAddress", String(account));
      localStorage.setItem("chainId", String(chainId));
    }

    if (localStorage.getItem("walletAddress") !== null) {
      setWallet(String(localStorage.getItem("walletAddress")));
    }
    if (localStorage.getItem("chainId") !== null) {
      setChainId(String(localStorage.getItem("chainId")));
    }

    let _temp_max = 0;
    if (coinFrom.ticker === "BNB") {
      _temp_max = bnb > 0.001 ? bnb - 0.001 : 0;
      setMaxTokenFromAmount(_temp_max);
      getTradeAmount(
        tokenAmountFrom,
        CONTRACT_ADDR[coinFrom.ticker],
        CONTRACT_ADDR[coinTo.ticker]
      );
    } else {
      getTokenBalance(CONTRACT_ADDR[coinFrom.ticker], erc20abi);
      setMaxTokenFromAmount(tokenBalance);
      getOtherTradeAmount(
        tokenAmountFrom,
        CONTRACT_ADDR[coinFrom.ticker],
        CONTRACT_ADDR[coinTo.ticker]
      );
    }

    // disconnect
  }, [coinFrom.ticker, coinTo.ticker, bnb, tokenBalance, wallet, walletChainId]);

  useEffect(() => {
    if (tokenAmountFrom == 0) {
      setTokenAmountTo(0);
      return;
    }
    setTokenAmountTo(parseFloat(tradeAmount.toFixed(8)));
  }, [tokenAmountFrom, tradeAmount]);

  /**
   * Open modal dialog
   * @param asset 1: coinFrom 2: coinTo
   */
  function openModal(asset: number) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function modifyToken(i: number) {
    setPrices(0);
    setTokenAmountFrom(0);
    setTokenAmountTo(0);
    if (changeToken === 1) {
      setCoinFrom(COINSFROMNEW[i]);
      // fetchPrices(COINSFROMNEW[i].address, coinTo.address)
    } else {
      setCoinTo(COINSFROMNEW[i]);
      // fetchPrices(coinFrom.address, COINSFROMNEW[i].address)
    }
    setIsOpen(false);
  }

  function switchTokens() {
    setPrices(0);
    setTokenAmountFrom(0);
    setTokenAmountTo(0);
    const one = coinFrom;
    const two = coinTo;
    setCoinFrom(two);
    setCoinTo(one);
    // fetchPrices(two.address, one.address);
  }

  /**
   * Get Price from api
   * @param one address for coinFrom
   * @param two address for coinTo
   */
  async function fetchPrices(one: string, two: string) {

    const res = await axios.get(`http://localhost:3000/tokenPrice`, {
      params: { addressOne: one, addressTwo: two }
    })


    setPrices(res.data)
  }
  return (
    <div>
      
      <div className="justify-between mx-auto w-[95%] lg:w-[90%] swap_form py-[150px] gap-[100px] flex-col md:flex-row items-center">
      <Modal
        open={isOpen}
        footer={null}
        style={{padding: 0}}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      >
        <div className="modalContent">
          {COINSFROMNEW?.map((e, i) => {
            return (
              <div
                className="tokenChoice"
                key={i}
                onClick={() => {
                  modifyToken(i);
                }}
              >
                <img src={e.img} alt={e.ticker} className="tokenLogo" />
                <div className="tokenChoiceNames">
                  <div className="tokenName">{e.name}</div>
                  <div className="tokenTicker">{e.ticker}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
        <div className="max-w-[500px] text-left ml-[20px]">
          <p className="uppercase tracking-[1px] font-[700] text-[17px] text-white mb-[10px]">
            Coin Swap
          </p>
          <h2 className="text-[52px] text-white font-[700] leading-[60px] mb-[15px]">
            You can swap <span className="text-[#ff06b7]">Algos</span> here
          </h2>
          <p className="text-[18px] leading-[28px] text-[#ddd]">
            Take advantage now of our prices's and rewards.
          </p>
        </div>
        <div className="swap_form_content w-[90%] md:max-w-[450px]">
          <div className="swap_form_content_top">
            <div className="swap_control_left">
              {wallet && (
                <span
                  className="flex"
                  onClick={() => {
                    disconnect();
                    setWallet("");
                    setChainId("");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faWallet}
                    color="white"
                    size="xs"
                    style={{
                      marginRight: "10px",
                      border: "1px solid",
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  />
                  {shortenIfAddress(wallet)}
                </span>
              )}
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
            <span className="text-[12px]">
              {coinFrom.ticker}/{coinTo.ticker}
            </span>
          </div>
          <div className="swap_form_content_inner_form">
            <div className="form">
              <label htmlFor="">
                From ({"Max :" + maxTokenFromAmount.toFixed(5) + " " + coinFrom.ticker})
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
                        if (coinFrom.ticker === "BNB") {
                          getTradeAmount(
                            amount,
                            CONTRACT_ADDR[coinFrom.ticker],
                            CONTRACT_ADDR[coinTo.ticker]
                          );
                        }
                      } else {
                        getOtherTradeAmount(
                          amount,
                          CONTRACT_ADDR[coinFrom.ticker],
                          CONTRACT_ADDR[coinTo.ticker]
                        );
                      }
                    }}
                    onKeyDown={(evt) =>
                      ["e", "E", "+", "-"].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <div className="form_content_select">

                    <div
                      className="select_header"
                      style={{ cursor: "pointer" }}
                      onClick={() => openModal(1)}
                    >
                      <img src={coinFrom.img} alt="assetOneLogo" className="assetLogo" />
                      {coinFrom.ticker}
                      <FontAwesomeIcon
                        icon={
                          (isOpen === true && changeToken === 1) ? faCaretDown : faCaretRight
                        }
                        color="white"
                        size="sm"
                        className="icon"
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="swap_form_content_middle_bar">
            <a href="#" onClick={switchTokens}>
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
                    setTokenAmountFrom(parseFloat((amount / rate).toFixed(8)));
                  }}
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                  }
                />
                <div className="form_content_select">
                  <div
                    className="select_header"
                    style={{ cursor: "pointer" }}
                    onClick={() => openModal(2)}
                  >
                    <img src={coinTo.img} alt="assetOneLogo" className="assetLogo" />
                    {coinTo.ticker}
                    <FontAwesomeIcon
                      icon={
                        (isOpen === true && changeToken === 2) ? faCaretDown : faCaretRight
                      }
                      color="white"
                      size="sm"
                      className="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swap_form_content_btn">
            {wallet && !isUnsupportedChainIdError && walletChainId === "56" ? (
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
    </div>
  );
}
