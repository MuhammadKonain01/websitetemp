import React from 'react'
import {AiOutlineGift} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {BsGlobe2} from 'react-icons/bs'
import {TbPacman} from 'react-icons/tb'
import {IoLocationOutline} from 'react-icons/io5'

import Link from 'next/link'

export default function About() {
  return (
    <section className='container mx-auto py-10 px-4'>
    <div className='text-[#232940] text-[32px] font-medium items-center flex gap-4 py-16'>
        <h2>About Me</h2>
        <div className='bg-orange-600 h-[2px] w-[40px] translate-y-1'></div>
        
        </div>
        
<div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

<div>
    <img className='w-[400px]' src='/image_06.webp' alt='Portflio'/>
</div>
<div>
<div className='flex items-center justify-between w-[300px]'>

<div className='flex flex-col gap-6 '>

<div className='flex gap-4 items-center font-medium'>
   <AiOutlineGift className='text-orange-600 text-[23px]'/>
    Birthday
</div>

<div className='flex gap-4 items-center font-medium'>
   <FiBookOpen className='text-orange-600 text-[23px]'/>
    Study
</div>

<div className='flex gap-4 items-center font-medium'>
   <BsGlobe2 className='text-orange-600 text-[23px]'/>
    Website
</div>

<div className='flex gap-4 items-center font-medium'>
   <TbPacman className='text-orange-600 text-[23px]'/>
    Interest
</div>

<div className='flex gap-4 items-center font-medium'>
   <IoLocationOutline className='text-orange-600 text-[23px]'/>
    Location
</div>


</div>

<div className='flex flex-col gap-6  text-gray-600'>
<div>:</div>
<div>:</div>
<div>:</div>
<div>:</div>
<div>:</div>

</div>

<div className='flex flex-col gap-6  text-gray-600'>
    <div>04-04-1996</div>
    <div>University Of </div>
    <div>www.Google.com</div>
    <div>Reading</div>
    <div>123-Pakistan</div>
</div>


    </div>

<div className='max-w-[800px]'>
<h2 className='font-bold mt-16 mb-10'>I&apos;m Muhammad Konain and I&apos;m a Frontend Developer</h2>
        <p className='text-gray-6oo pb-10'>Hi! My name is Muhammad Konain. I am a Web Developer, and I&apos;m very passionate and dedicated about my work. With 20 years experience as a professional.</p>
        {/* <button type="button" className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Hire Me </button> */}
       <Link href='https://github.com' className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" >
        Hire Me
       </Link>

</div>

    </div>
        </div>


  
    </section>
  )
}
