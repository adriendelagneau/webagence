"use client"
import React, { useLayoutEffect, useRef } from 'react'
import textSplitter from '../textSplitter';
import gsap from 'gsap';

const Experience = () => {


    const text = "experience";
  const text2 = "est";
  const text3 = "là.";

    
    const splitText = textSplitter(text);
    const splitText2 = textSplitter(text2);
    const splitText3 = textSplitter(text3);

    
    const experienceRef = useRef(null);
    useLayoutEffect(() => {
        const spans = gsap.utils.toArray("#experience span")

      // GSAP animation setup
      const experience = experienceRef.current;
  
      let ctx = gsap.context(() => {
  
        // anime clip path
        gsap.timeline({
          scrollTrigger: {
            trigger: experience,
            start: 'top 50%',
            end: 'top 10%',
            scrub: true,
           // markers: true
          },
        })
          .to(spans, { scale: 1, stagger: .05, translateY: '10%', ease: "power2.out" }, 'one')
          .fromTo(".toto",{translateX: "-30%", opacity: 0}, { translateX: "0%", opacity: 1 },'one')
      }, experience);
  
      return () => ctx.revert();
  
    }, []);

  return (
      <div id='experience' ref={experienceRef}>
          <div className='flex flex-col w-full px-3'>
              <div className='text-[210px] uppercase'>
              {splitText}
          </div>
              <div className='flex justify-end w-full'>
                  <p className='w-1/3 pt-20 text-xl pr-7 toto'>Connues ou moins connues, j’accueille dans #lvr des personnalités inspirantes qui ont un parcours hors du commun.</p>
          <div className='flex'>
          <div className='pr-12 text-[210px] uppercase'>{splitText2}</div>
          <div className='text-[200px] uppercase'>{ splitText3}</div>
          </div>
                </div>
          </div>
    </div>
  )
}

export default Experience