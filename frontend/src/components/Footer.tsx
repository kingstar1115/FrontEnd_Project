import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function Home() {
const { i18n } = useTranslation();

return (
    <div className='footer border-t-[1px]  border-[#0c1226]'>
        <div className="copyright justify-between w-[95%] lg:w-[90%] m-auto py-[20px] px-[5px] text-center md:text-start font-chakrapetch text-[14px]">
            <div className='flex justify-center md:justify-start align-middle'>
            <Link to="/"><img className='w-[70px] pr-[10px]' src="/assets/images/logo1.png" alt="Logo" /></Link>
            <p className='align-middle my-auto'>
                <Trans i18nKey={'allrightreserve'}>
                ALGONRICH 2022- All Rights Reserved
                </Trans>
            </p>
            </div>
        </div>
    </div>
)
}