'use client'
import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Marquee = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const firstText2 = useRef(null);
  const secondText2 = useRef(null);
  const slider2 = useRef(null);

  let xPercent = 0;
  let xPercent2 = 0;

  let direction = -1;


  useEffect(() => {
    gsap.set(secondText.current, { left: secondText.current.getBoundingClientRect().width })
    gsap.set(secondText2.current, { left: secondText2.current.getBoundingClientRect().width })

    requestAnimationFrame(animate);

    return () => {
      // Clean up any resources if needed
    };
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        pinSpacer: false,
        onUpdate: e => direction = e.direction * 1
      },
    })

    gsap.to(slider2.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        pinSpacer: false,
        onUpdate: e => direction = e.direction * 1
      },
    })

    requestAnimationFrame(animate);

    return () => {
      // Clean up any resources if needed
    };
  }, [])


  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })

    if (xPercent2 < -100) {
      xPercent2 = 0;
    }
    else if (xPercent2 > 0) {
      xPercent2 = -100;
    }
    gsap.set(firstText2.current, { xPercent: xPercent2 })
    gsap.set(secondText2.current, { xPercent: xPercent2 })

    requestAnimationFrame(animate);
    xPercent += 0.04 * direction;
    xPercent2 -= 0.04 * direction
  }

  return (
    <div className='relative flex h-[50vh] w-full overflow-hidden '>

<div className="absolute z-10 -translate-x-3 top-2/4 border-y-2 rotate-3 border-skin-border" >
        <div ref={slider} className="relative whitespace-nowrap">
          <p className='relative pr-5 m-0 uppercase text-7xl' ref={firstText}> blackbird studio - blackbird studio - blackbird studio -</p>
          <p className='absolute top-0 left-[100%] m-0 text-7xl pr-5 uppercase' ref={secondText}> blackbird studio - blackbird studio - blackbird studio -</p>
        </div>
      </div>

      <div className="absolute z-10 -translate-x-3 top-1/2">
        <div ref={slider2} className="relative z-20 whitespace-nowrap -rotate-6 border-y-2 border-skin-border bg-skin-fill">
          <p className='relative pr-5 m-0 uppercase text-7xl ' ref={firstText2}> blackbird studio - blackbird studio - blackbird studio -</p>
          <p className='absolute top-0 left-[100%] m-0 text-7xl pr-5 uppercase ' ref={secondText2}> blackbird studio - blackbird studio - blackbird studio -</p>
        </div>
      </div>

    </div>
  )
}

export default Marquee