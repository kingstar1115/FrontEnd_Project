
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, } from "@fortawesome/free-solid-svg-icons";

export default function ScrollTopBtn() {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (visible) {
    return (
      <div className='fixed rounded-full bg-[#5441ad] right-[40px] bottom-[30px] cursor-pointer z-20' onClick={() => scrollToTop()} >
        <FontAwesomeIcon icon={faChevronUp} className="m-[15px]" color="white" size="xl" />
      </div>
    )
  } else {
    return (
      <div className='hidden'>
      </div>
    )
  }
}