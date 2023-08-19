import React from 'react'

export default function Contact() {
  return (
<>
<section className='container mx-auto py-10 px-4'>


<div className='text-[#232940] text-[32px] font-medium items-center flex gap-4 py-16'>
        <h2>Creative Work</h2>
        <div className='bg-orange-600 h-[2px] w-[40px] translate-y-1'></div>
        </div>

        <form className='flex flex-col gap-8 pt-9'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <input type="text" placeholder='Name' className='outline-[#ff4D41] border-solid border-2 border-gray-600 rounded-[5px] px-4 py-2 w-[100%]' required/>
            <input type="email" placeholder='Email' className='outline-[#ff4D41] border-solid border-2 border-gray-600 rounded-[5px] px-4 py-2 w-[100%]' required/>
       
        </div>
        <input type="text" placeholder='Subject' className='outline-[#ff4D41] border-solid border-2 border-gray-600 rounded-[5px] px-4 py-2 w-[100%]' required/>
       <textarea rows={6} placeholder='Message'  className='outline-[#ff4D41] border-solid border-2 border-gray-600 rounded-[5px] px-4 py-2 w-[100%]' required></textarea>
    <div>
    <button type="button" className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">SEND MESSAGE </button>
    </div>
    </form>


</section>

</>
  )
}
