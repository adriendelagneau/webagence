"use client"
import React, { useEffect, useRef, useState } from 'react'
import GsapMagnetic from '../Magnetic'
const Header = () => {

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const navRef = useRef(null)
  let previousSxrollY = 0


  const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > previousSxrollY && scrollY > 150) {
          setIsScrollingDown(true)
      } else setIsScrollingDown(false)
      previousSxrollY = scrollY
  };

  const handleResize = () => {
      if (window.innerWidth < 1080) {
          navRef.current.style.display = 'none';
      } else {
          navRef.current.style.display = 'inline-block';
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    //  window.addEventListener('resize', handleResize)

      return () => {
          window.removeEventListener('scroll', handleScroll);
      //    window.removeEventListener('resize', handleResize);
      };
  }, []);

  const navigationClass = isScrollingDown ? 'navigation scrolled' : 'navigation';


  return (
<nav className={`flex items-center justify-between h-[80px] px-5 fixed left-0 w-full z-50 transition-all backdrop-blur-3xl   ${isScrollingDown ? "-top-[80px]" : "top-0"}`} ref={navRef}>


      
      <ul className='flex items-center justify-between h-full gap-3 uppercase'>
      <li className='h-12 overflow-hidden border rounded-full cursor-pointer border-skin-border'>
    <div className="h-24 transition-all hover:-translate-y-1/2">
      <div className='flex items-center justify-center h-12 p-5 '>episodes</div>
      <div className='flex items-center justify-center h-12 bg-skin-secondary text-skin-secondary'>episodes</div>  
    </div>

</li>
<li className='h-12 overflow-hidden border rounded-full cursor-pointer border-skin-border'>
    <div className="h-24 transition-all hover:-translate-y-1/2">
      <div className='flex items-center justify-center h-12 p-5 '>episodes</div>
      <div className='flex items-center justify-center h-12 bg-skin-secondary text-skin-secondary'>episodes</div>  
    </div>

</li>
<li className='h-12 overflow-hidden border rounded-full cursor-pointer border-skin-border'>
    <div className="h-24 transition-all hover:-translate-y-1/2">
      <div className='flex items-center justify-center h-12 p-5 '>episodes</div>
      <div className='flex items-center justify-center h-12 bg-skin-secondary text-skin-secondary'>episodes</div>  
    </div>

</li>
         </ul>
      
      <div>

      <GsapMagnetic>
      <svg className="fill-current text-myBlue" height="55px" width="55px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.664 502.664" xmlSpace="preserve">
  <g>
    <g>
      <path d="M363.532,79.873c-72.952,14.496-67.754,73.858-126.405,98.816 c-25.971,11.023-85.809,17.688-92.323,14.603c-39.733-18.68-98.169-65.403-98.169-65.403s5.22,38.051,25.583,70.903 C24.612,187.533,0,163.179,0,163.179s31.536,274.769,246.791,261.503 C410.6,414.608,400.828,269.631,427.662,227.438 c26.791-42.128,75.002-33.392,75.002-33.392S473.177,58.129,363.532,79.873z M401.864,162.532 c-10.009,0-18.098-8.111-18.098-18.098s8.089-18.098,18.098-18.098c9.966,0,18.076,8.132,18.076,18.098 S411.851,162.532,401.864,162.532z" />
    </g>
  </g>
          </svg>
          </GsapMagnetic>

      </div>
        </nav>
  )
}

export default Header