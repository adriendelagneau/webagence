'use client'
import Landing from '@/components/sections/Landing'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Marquee from '@/components/sections/Marquee'

export default function Home() {

    // Use lennis for smooth scroll
    useEffect(() => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }, [])
  
  
  return (
    <main className="bg-[#fb5724] text-[#1a2842]">
      <Landing />
      <Gallery />
      <Marquee />
      <Footer />
    </main>
  )
}
