'use client'
import Landing from '@/components/sections/Landing'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Marquee from '@/components/sections/Marquee'
import Header from '../components/sections/Header'
import Team from '@/components/sections/Team'
import Experience from '@/components/sections/Experience'
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
    <main className="bg-skin-fill text-skin-base theme-toto">
      <Header />
      <Landing />
      <Experience />
      <Gallery />
      <Marquee />
      <Team />
      <Footer />
    </main>
  )
}
