'use client'
import Image from 'next/image'

const HeroPage = () => {

  return (
    <div id='Home' className='w-full overflow-hidden relative flex justify-center items-center  min-h-screen bg-gray-700 after:w-full after:h-1/3 after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-neutral-900'>
      <Image src={'/HeroLG.jpg'} fill sizes='' quality={100}  alt='Hero Image' objectFit='cover' className='mix-blend-plus-darker hidden md:block' />
      <Image src={'/HeroSM2.jpg'} fill sizes='' quality={100} priority alt='Hero Image' objectFit='cover' className='mix-blend-plus-darker md:hidden' />
      <div className=' hidden md:block absolute translate-x-[0%] lg:translate-y-[50%]      md:translate-x-[20%] md:translate-y-[80%]   mix-blend-color-burn'>
        <p className='font-bold antialiased text-[48px] md:text-[150px] lg:text-[200px]  bg-clip-text bg-gradient-to-t from-neutral-800 to-slate-400  '> <span className='text-transparent   '>LastLife</span></p>
      </div>
      
    <span className=' px-5x absolute bottom-20 text-white  text-center text-2xl font-bold'>Join the BGMI Tournament Now !<span className='animate-ping '>⬇</span></span>

    </div>
  )
}

export default HeroPage
