'use client'
import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'
import textSplitter from '../textSplitter';

const Landing = () => {

  const text = "Black Bird";
  const splitText = textSplitter(text);

  const text2 = "studio";
  const splitText2 = textSplitter(text2);

  useLayoutEffect(() => {
    gsap.to('.textFirst', {opacity:1 , translateY: 0})
    gsap.to(".title span", {opacity: 1, translateY: "0%", rotateY: '0deg', stagger: .04, duration: .5})
  }, [])
  
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen  pt-[10vh] gap-24 uppercase font-bold tracking-[1em]'>
    <div className='translate-y-full opacity-0 textFirst'>episode #001</div>
    <div className="title">
      <div>
        {splitText}
      </div>
      <div>
      {splitText2}
      </div>
    </div>
    <div className='translate-y-full opacity-0 textFirst'>president du groupe eclore</div>
  </div>
  )
}

export default Landing