import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Navbar from './api/hello/components/Navbar'
// import Hero from './api/components/Hero'
import About from './components/About'
import WhatIdo from './components/WhatIdo'
import Skills from './components/Skills'
import CreativeWork from './components/CreativeWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    // <<h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>>
  <>
  {/* <Navbar /> */}
  <Navbar2 />
  <Hero />
  <About />
  <WhatIdo />
  <Skills />
  <CreativeWork />
  <Contact />
  <Footer />
  </>
    )
}