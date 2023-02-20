import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.scss';
import Team from 'components/Team';
import useSwiperRef from 'hooks/useSwiper';
import RoadmapBox from 'components/RoadmapBox';
import { TeamAvatar, RoadmapInfo} from 'const/Consts';

export default function Home() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const { t, i18n, ready } = useTranslation();
  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      duration: 1000,
    });
  }, [])
  return (
    <div className="home mt-[0px]">
      <div className='home-content' id='home'>
        <div className='overlay'></div>
        <div className='justify-between mx-auto w-[95%] lg:w-[90%]'>
          <div className='logo-animate pt-[130px] lg:pt-[130px] xl:pt-[160px] mt-[0px]'>
            <img className='w-[500px] pl-[100px]' src="/assets/images/logo1.png" alt="Logo" />
          </div>
          <div className='lg:flex block pt-[60px] lg:pt-[160px] xl:pt-[180px] mt-[0px]'>
            <div className='w-[95%] lg:w-[55%] text-center items-center m-auto'>
              <h1 className='title text-[#3d4db5] md:text-[60px] text-[30px] delay-[400ms] font-chakrapetch font-[700] uppercase mb-[16px] text-left'><Trans i18nKey={"futurehere"}>The Future is Here</Trans></h1>
              <p className='sub-title pr-[10px] lg:pr-[140px] mb-[48px] delay-500 font-chakrapetch text-[18px] md:text-[24px] text-white text-left'>
                <Trans i18nKey={"futurehere_content"}>algonrich is a decentralized utility token that allows user's to purchase items and services at a discount truth our website taking advantage of blockchain technology for a better future and client experience. Our goal is to make our project growth with the enovation of blockchain technology.</Trans>
              </p>
              <div className='wrap-btn md:flex'>
                <SocialIcon url='https://www.facebook.com/Algonrich-100854022676795' target="_blank" fgColor='white' bgColor="transparent" className='text-[20px] md:text-[30px] custom-btn px-[10px] sm:py-0 sm:px-[32px] font-chakrapetch w-[100%] lg:w-auto  mr-[15px] my-[5px] md:justify-start' />
                <SocialIcon url='https://twitter.com/algonrich' bgColor="transparent" target="_blank" fgColor='white' className='text-[20px] md:text-[30px] custom-btn px-[10px] sm:py-0 sm:px-[32px] font-chakrapetch w-[100%] lg:w-auto mr-[15px] my-[5px] md:justify-start' />
                <SocialIcon url='https://www.instagram.com/algonrich' bgColor="transparent" target="_blank" fgColor='white' className='text-[20px] md:text-[30px] custom-btn px-[10px] sm:py-0 sm:px-[32px] font-chakrapetch w-[100%] lg:w-auto mr-[15px] my-[5px] md:justify-start' />
                <SocialIcon url='https://github.com/Algonrich' bgColor="transparent" target="_blank" fgColor='white' className='text-[20px] md:text-[30px] custom-btn px-[10px] sm:py-0 sm:px-[32px] font-chakrapetch w-[100%] lg:w-auto mr-[15px] my-[5px] md:justify-start' />
                <SocialIcon url='https://www.youtube.com/channel/UCWjfEAgHV-ow71I3VrWjCVw' target="_blank" fgColor='white' bgColor="transparent" className='text-[20px] md:text-[30px] custom-btn px-[10px] sm:py-0 sm:px-[32px] font-chakrapetch w-[100%] lg:w-auto mr-[15px] my-[5px] md:justify-start' />
                <SocialIcon url='https://t.me/algonrich_us_official' bgColor="transparent" target="_blank" fgColor='white' className='text-[20px] md:text-[30px] custom-btn px-[10px] sm:py-0 sm:px-[32px] font-chakrapetch w-[100%] lg:w-auto mr-[15px] my-[5px] md:justify-start' />
                <a href="https://discord.gg/SKmc2QUTc9" target="_blank" className='text-[20px] md:text-[30px] custom-btn discord-btn px-[10px] sm:py-0 font-chakrapetch  relative align-middle mr-[15px] my-[5px] md:justify-start inline-block '>
                  <img src="/assets/images/discord.svg" alt="" className='w-[30px] md:w-[50px] h-[50px] py-[12px]' />
                </a>
              </div>
            </div>
            <div className='video w-[95%] lg:w-[45%] mt-[50px] mx-auto lg:m-auto'>
              <video className='w-[100%] m-auto' src={'/assets/movies/' + i18n.language + '_movie.mp4'} controls>
                <Trans i18nKey={"video_notsupport"}>Sorry, your browser doesn't support videos.</Trans>
              </video>
              <div className='caption uppercase font-chakrapetch font-bold mt-[24px] text-[32px]'>
                <Trans i18nKey={"what_is_blockchain"}>What is bitcoin</Trans>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-us' id='about'>
        <div className='justify-between mx-auto w-[95%] lg:w-[90%]'>
          <div
            className='py-[80px] sm:flex mt-[10px] sm:mt-[225px] aos-init'
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <div className='w-[95%] sm:w-[43%] m-auto'>
              <div className='content-about'>
                <h3 className='uppercase font-bold text-[18px] text-left text-[#3d4db5] mb-[15px]'><Trans i18nKey={'aboutus'}>About us</Trans> </h3>
                <p className='uppercase font-bold text-[32px] sm:text-[42px] text-left font-chakrapetch text-white'>
                  <Trans i18nKey={"whatisalgonrich"}>What is Algonrich?</Trans>
                </p>
                <div className='w-[100%] sm:w-[90%] font-chakrapetch text-left text-[20px] text-white mb-[40px]'>
                  <p>
                    <Trans i18nKey={'whatisalgonrichanswer'}>
                      Algonrich is a transactional and ecosystem representing the future of crypto systems by implementing tokenomics to improve the future of business in the blockchains of the future. Our plans include development and inclusion of platforms which will offer or help in providing good and services for the common people and business. Some of the plans include social media platforms, transportation services, and entertainment ect. Our main focus is to develop or link with companies that can provide or help in the growth of blockchain ecosystem to improve life and business transactions to clients by easing the ability to buy everyday items using blockchain base technology to pay and receive goods and services with crypto.
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[95%] sm:w-[57%] m-auto'>
              <div className='wrap-about'>
                <div className='textbox'>
                  <h3 className='title'>
                    <Trans i18nKey={'textbox_0_title'}>
                      Is Algonrich Current Formula Profitable?
                    </Trans>
                  </h3>
                  <p>
                    <Trans i18nKey={'textbox_0_content'}>
                      Yes, the Algonrich formula is profitable in a exponential way. our current services and implementation of our Algorithmic formula is generating profits constantly. We are working with our current partners and clients at that moment which are receiving returns on the investment they have made in the project so far.
                    </Trans>
                  </p>
                </div>
                <div className='textbox'>
                  <h3 className='title'>
                    <Trans i18nKey={"textbox_1_title"}>
                      How Algonrich Formula Works?
                    </Trans>
                  </h3>
                  <p>
                    <Trans i18nKey={"textbox_1_content"}>
                      Algorithms (Algos) are a set of instructions that are introduced to carry out a specific task, the process is referred to as Algorithmic works, which are mathematical models. The trades are performed by algorithmic systems to allow for small investment, low lost, and higher returns.
                    </Trans>
                  </p>
                </div>
                <div className='textbox'>
                  <h3 className='title'>
                    <Trans i18nKey={"textbox_2_title"}>
                      Why We Model Mean Reversion?
                    </Trans>
                  </h3>
                  <p>
                    <Trans i18nKey={"textbox_2_content"}>
                    Mean reversion is a mathematical method use in stock investing deviation of the stock market prices, often used as a buy or sell indicator. Trading around mean reversion is going to be use in the future of ALGO'S.
                    </Trans>
                  </p>
                </div>
                <div className='textbox'>
                  <h3 className='title'>
                    <Trans i18nKey={'textbox_3_title'}>
                      Can Algonrich Provide consistency?
                    </Trans>
                  </h3>
                  <p>
                    <Trans i18nKey={"textbox_3_content"}>
                    Yes, algorithms (Algos) also helps achieve consistency. The biggest challenge in the process is having a working and predictable product which we have already developed, Making our project stable even before becoming the great leader in the crypto market as we are going to be.
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='road' id='roadmap'>
        <div className='overlay'></div>
        <div className='justify-between mx-auto w-[95%] lg:w-[90%] mt-[50px]'>
          <div
            className='title aos-init mb-[50px]'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h6 className='text-[20px] text-[#3d4db5] uppercase font-chakrapetch'><Trans i18nKey={'roadmap'}>roadmap</Trans></h6>
            <h1 className='text-[30px] sm:text-[40px] text-white font-bold font-chakrapetch uppercase'><Trans i18nKey={'timeline'}>Algonrich TIMELINE</Trans></h1>
          </div>
          <div className='text-white w-[90%] m-auto'>
            <RoadmapBox data={RoadmapInfo} />
          </div>
        </div>
      </div>

      <div className='team mt-[30px]' id='team'>
        <div className='justify-between mx-auto w-[95%] lg:w-[90%]'>
          <div className='lg:flex'>
            <div className='w-[95%] m-auto lg:w-[40%] px-[15px] aos-init'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
              data-aos-anchor-placement="center-bottom"
            >
              <div className='team-title text-start'>
                <h6 className='uppercase text-[#3d4db5] text-[18px]'><Trans i18nKey={'ourteam'}>our team</Trans></h6>
                <h4 className='uppercase text-white text-[32px] font-chakrapetch'><Trans i18nKey={'meetourteam'}>Meet our team</Trans></h4>
              </div>
              <div className='whoweare mt-[40px] text-start'>
                <h4 className='text-white text-[24px] mb-[20px]'><Trans i18nKey={'bepart'}>Be Part of the Team</Trans></h4>
                <p className='text-[#B9B9BF] text-[18px] [word-spacing:4px]'><Trans i18nKey={'bepart_text'}>
                  Algonrich will be offering many features with a decentralize team that will leave our competitors behind. Algonrich has a mass potential to become a leader in the market. We have consistently demonstrated the power of innovation. A mega potential in the derivatives market is waiting to be un cap and we are ready to tap into our success with our plans, Join the team of future winners.</Trans></p>
              </div>
              <div className='swiger-slide-btn md:flex justify-center md:justify-start space-x-3 mt-[40px]'>
                <button className='w-[50px] h-[50px] bg-[#3d4db5] cursor-pointer' ref={prevElRef}>
                  <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
                </button>
                <button className='w-[50px] h-[50px] bg-[#3d4db5] cursor-pointer' ref={nextElRef}>
                  <FontAwesomeIcon icon={faChevronRight} color="white" size="2x" />
                </button>
              </div>
            </div>
            <div className='w-[95%] m-auto lg:w-[60%] p-[20px] aos-init'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
              data-aos-anchor-placement="center-bottom"
            >
              <Team data={TeamAvatar} perview={window.innerWidth <= 768 ? 1 : 3} nav={{
                prevEl,
                nextEl,
              }} />
            </div>
          </div>
          <div className='flex justify-center mt-[70px] mb-[40px] align-middle w-[90%] mx-auto space-x-1 md:space-x-3'>
            <SocialIcon url='https://www.facebook.com/Algonrich-100854022676795' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
            <SocialIcon url='https://twitter.com/algonrich' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
            <SocialIcon url='https://www.instagram.com/algonrich' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
            <SocialIcon url='https://github.com/Algonrich' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
            <SocialIcon url='https://www.youtube.com/channel/UCWjfEAgHV-ow71I3VrWjCVw' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
            <SocialIcon url='https://t.me/algonrich_us_official' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
            <SocialIcon url='https://discord.gg/SKmc2QUTc9' target="_blank" fgColor='white' className='text-[20px] md:text-[30px]' />
          </div>
          <h1 className='font-chakrapetch text-[24px] md:text-[32px] text-white'>
            <Trans i18nKey={"dontmiss"}>
              Don't Miss Out, Join Now For Early Access
            </Trans>
          </h1>
        </div>
      </div>
    </div >
  )
}