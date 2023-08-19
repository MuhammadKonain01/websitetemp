import React from 'react'

export default function CreativeWork() {
  return (
    <section className='container mx-auto py-10 px-4'>
  <div className='text-[#232940] text-[32px] font-medium items-center flex gap-4 py-16'>
        <h2>Creative Work</h2>
        <div className='bg-orange-600 h-[2px] w-[40px] translate-y-1'></div>
        </div>


        <div className='grid grid-cols-3 gap-4 '>

        <div className='row-span-2 relative group'>
                <img src='/image_07.webp' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>

            <div className=' relative group'>
                <img src='/image_08.webp' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>
            <div className=' relative group'>
                <img src='/image_09.webp' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>

        

</div>
    </section>
  )
}
