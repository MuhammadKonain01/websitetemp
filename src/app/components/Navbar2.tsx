"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Popover} from "@headlessui/react";
import { useState } from 'react'

// export default function Navbar2() {
//   return (

//    <>
//    <div className='sticky top-0 w-full h-20 shadow-md z-[100] bg-white'>

//     <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10'>

//         <Link href='/'>
//             <Image src='/' alt='' width={100} height={100} className='w-16 h-16 rounded-full bg-[#54ca95]'>

//             </Image>
//         </Link>
        
// <div className=''>
//     <ul className='hidden md:flex items-center'>
//     <li className='border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300'>
// <Link href='/'>Home</Link>
// </li>

// <li className='border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300'>
// <Link href='/'>About</Link>
// </li>
// <li className='border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300'>
// <Link href='/'>Portfolio</Link>
// </li>
// <li className='border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300'>
// <Link href='/'>Contact</Link>
// </li>
//     </ul>


// </div>


//     </div>
//    </div>
   
//    </>
//   )
// }


// export default function Navbar2() {
//     return (
  
//      <>
     
//     <div className='container mx-auto flex items-center border-b-2 px-6 py-2 h-24'>
     
//         <h1 className='font-bold'>ABC</h1>
//         <div className='grow'>
//         <div className='hidden flex items-center justify-center gap-2 md:gap-8'>
//         <Link href='/'>Home</Link>
//         <Link href='/'>Home</Link>
//         <Link href='/'>Home</Link>
//         <Link href='/'>Home</Link>
//         </div>
//         <div className='flex grow items-center justify-end sm:hidden' >
//         <Popover. Button className='inline-flex items-center rounded-md bg-white
//         p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500'>
//         <span className='si-0nly'>open menu</span>
        
//         </Popover. Button>

//         </div>

//         </div>
//     </div>
//      </>
//     )
//   }



function NavLink({to, children}:any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}:any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex  items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
               

            <a className="text-xl font-medium my-4" href="/Home" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>

                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

export default function Navbar2() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed flex filter drop-shadow-md bg-white w-full px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center ">

                {/* <a className="text-2xl font-semibold" href="/"></a> */}
                <Image src='/logo.png' alt='Panaverse' width={80} height={80}></Image>

            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    
                    
                <NavLink to="/home">
                        HOME
                    </NavLink>

                    <NavLink to="/about">
                        ABOUT
                    </NavLink>

                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    
                </div>
            </div>
        </nav>
    )
}