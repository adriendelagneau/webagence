"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Team = () => {

  const sectionRef = useRef(null);
  const myRef = useRef(null)
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)


  useLayoutEffect(() => {
    // GSAP animation setup
    const section = sectionRef.current;

    let ctx = gsap.context(() => {

      // pin the section
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${section.clientHeight}`,
          pin: true,
          scrub: true,
        },
      })

      // anime clip path
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${section.clientHeight}`,
          scrub: true,
        },
      })
        .to([myRef.current, myRef1.current, myRef2.current], { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", stagger: 0.35 }, "one")
        .fromTo("p", { opacity: 0 }, {opacity: 1,  stagger: 0.16 }, "one")

    }, section);

    return () => ctx.revert();

  }, []);

  return (
    <>
    <div id='gallery' ref={sectionRef} className="flex flex-col items-center justify-center w-full min-h-screen gap-[5vw] uppercase text-lg  lg:flex-row lg:gap-[10vw] xl:gap-[5vw] sm:text-2xl xl:text-2xl">


      <div className='flex flex-col items-center'>

        <div className='w-[140px] h-[140px] relative rounded-3xl sm:w-[180px] sm:h-[180px] xl:w-[250px] xl:h-[250px] 2xl:w-[320px] 2xl:h-[320px] border-2 border-skin-border '>
          <div className='absolute top-0 left-0 z-10 w-full h-full rounded-3xl cp1' ref={myRef}>
            <img src='/images/team/portrait-white-man-isolated.jpg' alt='' className='w-full h-full mx-auto rounded-3xl cover' />
          </div>
          <div className='absolute top-0 left-0 w-full h-full rounded-3xl z-5 cp1'>
            <img src='/images/team/fotor-ai-2023111704210.jpg' alt='' className='w-full h-full m-auto rounded-3xl cover' />
          </div>
        </div>
        <p className='py-1 sm:py-4'>Gregory Gloanguen</p>
        <p>webdesigner</p>
      </div>


      <div className='flex flex-col items-center'>

        <div className='w-[140px] h-[140px] relative rounded-3xl sm:w-[180px] sm:h-[180px] xl:w-[250px] xl:h-[250px] 2xl:w-[320px] 2xl:h-[320px] border-2 border-skin-border '>
          <div className='absolute top-0 left-0 z-10 w-full h-full rounded-3xl cp1' ref={myRef1}>
            <img src='/images/team/portrait-white-man-isolated.jpg'  alt='' className='w-full h-full rounded-3xl cover' />
          </div>
          <div className='absolute top-0 left-0 w-full h-full rounded-3xl z-5 cp1'>
            <img src='/images/team/fotor-ai-2023111704629.jpg' alt='' className='w-full h-full rounded-3xl cover' />
          </div>
        </div>

        <p className='py-1 sm:py-4'>Gregory Gloanguen</p>
        <p>webdesigner</p>
      </div>

      <div className='flex flex-col items-center'>

        <div className='w-[140px] h-[140px] relative rounded-3xl sm:w-[180px] sm:h-[180px] xl:w-[250px] xl:h-[250px] 2xl:w-[320px] 2xl:h-[320px] border-2 border-skin-border '>
          <div className='absolute top-0 left-0 z-10 w-full h-full rounded-3xl cp1' ref={myRef2}>
            <img src='/images/team/portrait-white-man-isolated.jpg' alt='' className='w-full h-full rounded-3xl cover' />
          </div>
          <div className='absolute top-0 left-0 w-full h-full rounded-3xl z-5 cp1'>
            <img src='/images/team/download_image_1700141477311.png' alt='' className='w-full h-full rounded-3xl cover' />
          </div>
        </div>
        <p className='py-1 sm:py-4'>Gregory Gloanguen</p>
        <p>webdesigner</p>
      </div>

    </div>
    </>
  )
}

export default Team