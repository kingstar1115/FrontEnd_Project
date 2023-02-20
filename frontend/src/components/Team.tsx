import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Scrollbar, A11y } from "swiper";
import { Trans } from "react-i18next";
import { SocialIcon } from 'react-social-icons';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function Team({ data, perview, nav }: any) {
  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: nav.nextEl,
          prevEl: nav.prevEl,
        }}
        spaceBetween={30}
        slidesPerView={perview}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ maxHeight: perview === 1 ? "440px" : "420px", padding: "20px" }}
      >
        {data.map((item: any, ind: number) => {
          return (
            <SwiperSlide key={ind} className="flex justify-center">
                <div className='team-member max-w-[300px] relative'>
                  <img src={`${item.url}`} className="w-[250px] h-[250px] object-cover object-top bg-no-repeat m-auto" alt={item.name} />
                  <div className='name min-w-[250px] m-auto px-[16px] pt-[20px]'>
                    <h5 className='name text-[20px] text-white font-chakrapetch uppercase text-start font-bold hover:text-[#3d4db5] cursor-pointer'><Trans i18nKey={"name_" + ind}>{item.name}</Trans></h5>
                    <p className='role text-[16px] capitalize mb-[14px] text-start'
                    ><Trans i18nKey={"role_" + ind}>{item.role}</Trans></p>
                  </div>
                  <div className="absolute right-0 bottom-0">
                    <SocialIcon url={item.link_url} fgColor='#0e76a8' target="_blank" bgColor="transparent" className='text-[12px] hover:text-[#399cca] font-light' style={{width:"35px"}} />
                  </div>
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}