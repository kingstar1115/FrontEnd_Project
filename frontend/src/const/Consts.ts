const COINSFROM = ['BNB', 'ALGO', 'BUSD', 'Dogecoin', 'BTCB', 'USDC'];

const COINSTO = ['ALGO'];
const API_BASIC_URL = process.env.REACT_APP_API_BASIC_URL;

type TContractAddr = { [propKey: string]: string };
const CONTRACT_ADDR: TContractAddr = {
  BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  ALGO: "0x2dA63e26978B27CA854bdFe33F9866AA7c99813D",
  BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  Dogecoin: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
  USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  BTCB: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
};
const RoadmapInfo = [
  {
    date: 'Q1 2023',
    content: ['PancakeSwap Listing']
  },
  {
    date: 'Q2 2023',
    content: ['Legal Registration and compliance ',
      'Art and Metadata']
  },
  {
    date: 'Q3 2023',
    content: ['Bond Token For Pool Liquidity']
  },
  {
    date: 'Q4 2023',
    content: ['Mayor Exchange Listing']
  },
  {
    date: 'Q1 2024',
    content: ["Asset Backed Mechanism and Server's Implementation for computer power"]
  },
  {
    date: 'Q2 2024',
    content: ['Reverse Transaction App Contract']
  },
  {
    date: 'Q3 2024',
    content: ['NFT, Defi, Spot, Option, Wallet, Insurance, Gaming Launch pad, Dex']
  },
  {
    date: 'Q4 2024',
    content: ['Major Marketing Campaign']
  },
]
const TeamAvatar = [
  {
    role: 'CEO',
    name: 'Naynardo Saunders',
    url: '/assets/images/team/NaynardoSaunders.jpg',
    link_url: 'https://www.linkedin.com/in/naynardo-saunders-381a34258'
  },
  {
    role: 'CTO',
    name: 'Amaury Loaiza',
    url: '/assets/images/team/AmauryLoaiza.jpg',
    link_url:'https://www.linkedin.com/in/amaury-loaiza'
  },
  {
    role: 'CMO',
    name: 'Carlos Selman',
    url: '/assets/images/team/CarlosSelman.jpg',
    link_url:"https://www.linkedin.com/in/carlos-selman-b5920a52"
  },
  {
    role: 'Lead Developer',
    name: 'Sonny Tanaka',
    url: '/assets/images/team/SonnyTanaka.png',
    link_url:'https://www.linkedin.com/in/sun-tana-6b2189236'
  },
]

export {
  COINSFROM,
  COINSTO,
  CONTRACT_ADDR,
  API_BASIC_URL,
  RoadmapInfo,
  TeamAvatar,
  COINSFROMNEW
}

const COINSFROMNEW = [
  {
      "ticker": "USDC",
      "img": "https://cdn.moralis.io/eth/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
      "name": "USD Coin",
      "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "decimals": 6
  },
  {
      "ticker": "LINK",
      "img": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      "name": "Chainlink",
      "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "decimals": 18
  },
  {
      "ticker": "USDT",
      "img": "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
      "name": "Tether USD",
      "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "decimals": 6
  },
  {
      "ticker": "GUSD",
      "img": "https://cdn.moralis.io/eth/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png",
      "name": "Gemini USD",
      "address": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
      "decimals": 2
  },
  {
      "ticker": "DAI",
      "img": "https://cdn.moralis.io/eth/0x6b175474e89094c44da98b954eedeac495271d0f.png",
      "name": "Dai Stablecoin",
      "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "decimals": 18
  },
  {
      "ticker": "WETH",
      "img": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
      "name": "Wrapped Ethereum",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "decimals": 18
  },
  {
      "ticker": "WBTC",
      "img": "https://cdn.moralis.io/eth/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
      "name": "Wrapped Bitcoin",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "decimals": 8
  },
  {
      "ticker": "MATIC",
      "img": "https://cdn.moralis.io/eth/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
      "name": "Matic Token",
      "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      "decimals": 18
  },
  {
      "ticker": "UNI",
      "img": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
      "name": "Uniswap",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "decimals": 18
  },
  {
      "ticker": "CRV",
      "img": "https://cdn.moralis.io/eth/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
      "name": "Curve DAO Token",
      "address": "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "decimals": 18
  },
  {
      "ticker": "MKR",
      "img": "https://cdn.moralis.io/eth/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
      "name": "Maker",
      "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
      "decimals": 18
  },
  {
      "ticker": "SHIB",
      "img": "https://cdn.moralis.io/eth/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
      "name": "Shiba Inu",
      "address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
      "decimals": 18
  },
  {
      "ticker": "AAVE",
      "img": "https://cdn.moralis.io/eth/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
      "name": "AAVE",
      "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      "decimals": 18
  }

]