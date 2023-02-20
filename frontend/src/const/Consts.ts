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
  TeamAvatar
}