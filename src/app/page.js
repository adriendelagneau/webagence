'use client'
import Landing from '@/components/sections/Landing'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Marquee from '@/components/sections/Marquee'
import Header from '../components/sections/Header'
import Team from '@/components/sections/Team'
import Experience from '@/components/sections/Experience'
export default function Home() {

  const [theme, setTheme] = useState('');

    // Use lennis for smooth scroll
    useEffect(() => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }, [])
  
  useEffect(() => {
    function handleScroll() {
      const scrollPositionY = window.scrollY;

      // Check if scroll position is greater than 3000px
      if (scrollPositionY > 2080) {
        setTheme('theme-toto');
      } else {
        setTheme(''); // Reset to default theme or set another theme class
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  
  return (
    <main className={`bg-skin-fill text-skin-base ${theme} transition duration-700`}>
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
