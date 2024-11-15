import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div id='Home' className='w-full relative flex justify-center items-center  min-h-80  sm:min-h-screen bg-gray-700 after:w-full after:h-1/3 after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-neutral-900'>
     <Image src={'/HeroLG.jpg'} fill  quality={100} alt='Hero Image' className='mix-blend-plus-darker'/>
     <div className='absolute translate-x-[30%] translate-y-[50%]   mix-blend-color-burn'>
      <p className='font-bold antialiased text-[200px]  bg-clip-text bg-gradient-to-t from-neutral-800 to-slate-400  '> <span className='text-transparent   '>LastLife</span></p>
     </div>
    </div>
  )
}

export default HeroPage
