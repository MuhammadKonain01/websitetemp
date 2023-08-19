import React from 'react'

import Typewriter from "typewriter-effect"


export default function Hero() {
  return (
    <>
   <div className='bg-[url(/image_01.jpg)] h-screen bg-cover bg-center bg-flex flex items-center'>
 <div className='container mx-auto px-4 '>
    <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
<div>
    <h1 className='text-5xl text-black'> I'am Muhammad Konain</h1>
    <h4 className='text-2xl mt-3'>
        <p className='text-black text-2xl font-bold'>
            Frontend Developer<br />
            Mern Stack Developer</p>
    {/* <Typewriter 
    
    options={{
        strings:[
            "Frontend Developer",
            "Mern Stack Developer"
        ],
        delay:3,
        deleteSpeed:2,
        autoStart: true,
        loop: true,
    }}/> */}

    </h4>
</div>




<div className='bg-orange-600 h-[2px] w-[40px]'></div>

<div className='text-black'><p>In a professional context it often happens that private clients order a publication to be made.</p>

{/* <Button link='a' text="Learn More" /> */}
<a href='/' className='btn bg-orange-600 text-white py-2 px-4
rounded inline-block mt-10 font-medium border-orange-600 
hover:bg-white hover:text-orange-600 transition duration-200'>Learn More</a>
</div>

</div>
 </div>
 </div>
 </>
   )
}
