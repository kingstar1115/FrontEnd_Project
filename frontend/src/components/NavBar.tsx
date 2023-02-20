import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Trans } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";
import LangFlagSelector from "./LangFLagSelector";
import { useTranslation } from "react-i18next";

export default function NavBar({ lngCh }: any) {
  const [navbar, setNavbar] = useState(false);
  const [navbarCls, setNavbarCls] = useState('navbar');
  const { i18n, ready } = useTranslation();
  useEffect(() => {
    window.onscroll = function () { scrollFunction() };
  }, [])
  const scrollFunction = () => {
    if (document.documentElement.scrollTop < 200) {
      setNavbarCls('navbar');
    } else if (document.documentElement.scrollTop < 500) {
      setNavbarCls('navbar is-fixed');
    } else {
      setNavbarCls('navbar is-fixed is-small');
    }
  }
  const changeLng = (lang: any) => {
    lngCh(lang);
  }
  return (
    <nav className={navbarCls}>
      <div className="justify-between mx-auto w-[95%] lg:w-[90%] md:items-center md:flex">
        <div className="">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* <a href="/" className="flex md:hidden xl:flex align-middle"> */}
            <NavLink
              className="flex md:hidden xl:flex align-middle"
              to="/"
            >
              <img src="/assets/images/logo1.png" alt="Logo" className="w-[125px] md:w-[90px] xl:w-[120px]" />
              <h1 className="font-chakrapetch text-[22px] hidden sm:block md:text-[20px] xl:text-[24px] text-white my-auto ml-[18px] uppercase"><Trans i18nKey="company_title">algonrich</Trans></h1>
            </NavLink>
            {/* </a> */}
            <div className="md:hidden flex space-x-1">
              {/* <LanguageSelector change={changeLng} /> */}
              <LangFlagSelector change={changeLng} />
              <button
                className="pl-[10px] text-gray-700 rounded-md cursor-pointer outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-2 2xl:space-x-6 md:space-y-0 py-[30px] text-white font-chakrapetch uppercase font-bold">
              <li className="">
                <NavLink
                  to={"/comingsoon"}
                >
                  <Trans i18nKey="tab_store">Store</Trans>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/comingsoon"}
                >
                  <Trans i18nKey="tab_services">Services</Trans>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/comingsoon"}
                >
                  <Trans i18nKey="tab_rewards">Rewards</Trans>
                </NavLink>
              </li>
              <li>
                <a 
                href={'https://poocoin.app/tokens/0x2da63e26978b27ca854bdfe33f9866aa7c99813d'}
                target="_blank"
                ><Trans i18nKey="tab_poocoin">PooCoin</Trans></a>
              </li>
              <li>
                {
                  (ready && i18n.language == 'es') ? (
                    <a href="https://es.futurepaper.algonrich.com/"
                      target="_blank"
                    >
                      <Trans i18nKey="tab_futurepaper">Future Paper</Trans>
                    </a>
                  ) : (
                    <a href="https://futurepaper.algonrich.com/"
                      target="_blank"
                    >
                      <Trans i18nKey="tab_futurepaper">Future Paper</Trans>
                    </a>
                  )
                }
              </li>
              <li>
                <a
                  href="https://bscscan.com/address/0x2da63e26978b27ca854bdfe33f9866aa7c99813d"
                  target="_blank"
                ><Trans i18nKey="tab_smartcontact">Smart Contract</Trans>
                </a>
              </li>
              <li>
                <NavLink
                  to="/blog"
                ><Trans i18nKey="tab_news">News</Trans></NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                >
                  <Trans i18nKey="tab_contactus">Contact US</Trans>
                </NavLink>
              </li>
            </ul>

            <div className="my-3 mx-auto lg:mt-3 space-y-2 lg:hidden md:inline-block">
              <a href="https://pancakeswap.finance/swap?outputCurrency=0x2dA63e26978B27CA854bdFe33F9866AA7c99813D"
                target={"_blank"}
                className="inline-block w-full px-4 py-2 text-white rounded-0 border-[2px] rounded-[4px]  border-[#3d4db5] font-bold font-chakrapetch hover:text-[#3d4db5] hover:border-transparent hover:bg-white uppercase transition ease-in-ease"
              >
                <Trans i18nKey="btn_buyalgo"> buy algo</Trans>
              </a>
              <NavLink to="/swap"
                className="inline-block w-full px-4 py-2 text-white rounded-0 border-[2px] rounded-[4px]  border-[#3d4db5] font-bold font-chakrapetch hover:text-[#3d4db5] hover:border-transparent hover:bg-white uppercase transition ease-in-ease"
              ><Trans i18nKey="btn_swap">Swap</Trans>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex space-x-2">
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x2dA63e26978B27CA854bdFe33F9866AA7c99813D"
            target={'_blank'}
            className="px-4 py-2 text-white rounded-0 border-[2px] rounded-[4px]  border-[#3d4db5] font-bold font-chakrapetch hover:text-[#3d4db5] hover:border-transparent hover:bg-white uppercase transition ease-in-ease flex flex-nowrap"
          ><Trans i18nKey="btn_buyalgo">buy algo</Trans>
          </a>
          <NavLink to="/swap"
            className="px-4 py-2 text-white rounded-0 border-[2px] rounded-[4px]  border-[#3d4db5] font-bold font-chakrapetch hover:text-[#3d4db5] hover:border-transparent hover:bg-white uppercase transition ease-in-ease flex items-center"
          ><Trans i18nKey="btn_swap">Swap</Trans>
          </NavLink>

        </div>
        <div className="hidden lg:inline-block ml-2">
          {/* <LanguageSelector change={changeLng} /> */}
          <LangFlagSelector change={changeLng} />
        </div>
      </div>
    </nav>
  );
}