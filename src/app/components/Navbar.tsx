import Link from 'next/link'
import React from 'react'
import {FiMenu} from "react-icons/fi"


export default function Navbar() {
  return (
<>

<div className='bg-white fixed top-0 w-[100%] z-10'>
    <div className='container mx-auto flex justify-between items-center py-4 px-4 h-[100px]'>
        <div className='text-[24px] font-bold'> ABC</div>
        
        <div className='hidden md:flex gap-6'>
            <Link href='/' className='hover:text-orange-600 font-bold font-sans'>Home</Link>
            <Link href='/' className='hover:text-orange-600 font-bold font-sans'>About</Link>
            <Link href='/' className='hover:text-orange-600 font-bold font-sans'>Portfolio</Link>
            <Link href='/' className='hover:text-orange-600 font-bold font-sans'>Blog</Link>
            <Link href='/' className='hover:text-orange-600 font-bold font-sans'>Contact</Link>
        </div>
        <a href='/' className='hidden md:flex border-orange-600 px-4 py-1 text-white-600 rounded-[5px]
        items-center hover:text-white gap-2 h-[50px] hover:bg-orange-600 transition duration-200 hover:animate-bounce'>Download Resume </a>
        <div className='md:hidden text-{24px}'>
        <FiMenu />

        </div>
    </div>
</div>
<h1>Navbar</h1>
</>
  )
}
