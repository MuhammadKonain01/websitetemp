import React from 'react'
import {RiLightbulbFlashLine} from 'react-icons/ri'
export default function WhatIdo() {
  return (
   <section className='container mx-auto py-10 px-4'>
     <div className='text-[#232940] text-[32px] font-medium items-center flex gap-4 py-16'>
        <h2>What I Do</h2>
        <div className='bg-orange-600 h-[2px] w-[40px] translate-y-1'></div>
    
        </div>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-orange-600 text-white'>
<RiLightbulbFlashLine className='text-[28px]'/>
<h2 className='font-medium text-[20px]'>Web Development</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut illo consectetur saepe minima accusamus assumenda repellendus cupiditate animi, vitae omnis esse a quidem molestiae dolore pariatur eaque? Nihil, voluptatum?</p>
</div>

<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-orange-600 text-white'>
<RiLightbulbFlashLine className='text-[28px]'/>
<h2 className='font-medium text-[20px]'>Frontend Developent</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut illo consectetur saepe minima accusamus assumenda repellendus cupiditate animi, vitae omnis esse a quidem molestiae dolore pariatur eaque? Nihil, voluptatum?</p>
</div>

<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-orange-600 text-white'>
<RiLightbulbFlashLine className='text-[28px]'/>
<h2 className='font-medium text-[20px]'>Creative Design</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut illo consectetur saepe minima accusamus assumenda repellendus cupiditate animi, vitae omnis esse a quidem molestiae dolore pariatur eaque? Nihil, voluptatum?</p>
</div>

        </div>
   </section>
  )
}
