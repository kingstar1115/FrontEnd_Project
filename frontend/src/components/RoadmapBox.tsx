import { Trans } from "react-i18next";
export default function RoadmapBox({ data }: any) {
  return (
    <div className="roadmap after:left-[99.6%] sm:after:left-[49.8%] before:left-[99.6%] sm:before:left-[49.8%] w-[90%] block sm:flex justify-between">
      <div className="hidden sm:block box content-left w-[50%]">
        {
          data.map((item: any, ind: any) => {
            let box = ind % 2 === 0 ? (
              <div
                key={'1' + ind}
                className="item-left aos-init"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="item-content">
                  <h5 className="date sm:text-[36px] text-white">{item.date}</h5>
                  <ul>
                    {item.content.map((con: string, ind_con: number) => {
                      let i18nkey = 'loadmap_'+ ind+ "_" + ind_con; 
                      return (
                        <li className="pl-[26px] text-[#B9B9BF]" key={"" + ind_con + ind}><Trans i18nKey={i18nkey}>{con}</Trans></li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ) : (null)
            return box;
          })
        }
      </div>
      <div className="hidden sm:block box content-right w-[50%] mt-[120px]">
        {
          data.map((item: any, ind: any) => {
            let box = ind % 2 === 1 ? (
              <div
                key={'1' + ind}
                className="item-right aos-init"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="item-content">
                  <h5 className="date sm:text-[36px] text-white">{item.date}</h5>
                  <ul>
                    {item.content.map((con: string, ind_con: number) => {
                      let i18nkey = 'loadmap_'+ ind+ "_" + ind_con; 
                      return (
                        <li className="pl-[26px] text-[#B9B9BF]" key={"" + ind_con + ind}><Trans i18nKey={i18nkey}>{con}</Trans></li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ) : (null)
            return box;
          })
        }
      </div>
      <div className="sm:hidden box content-left">
        {
          data.map((item: any, ind: any) => {
            return (
              <div key={'1' + ind}
                className="item-left aos-init"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="item-content">
                  <h5 className="date text-[24px] text-white">{item.date}</h5>
                  <ul>
                    {item.content.map((con: string, ind_con: number) => {
                      let i18nkey = 'loadmap_'+ ind+ "_" + ind_con; 
                      return (
                        <li className="pl-[26px] text-[#B9B9BF]" key={"" + ind_con + ind}><Trans i18nKey={i18nkey}>{con}</Trans></li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}