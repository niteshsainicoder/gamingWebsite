import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-fit min-h-[200px] gap-10 sm:min-h-[350px] bg-gradient-to-b from-slate-800 to-neutral-900 flex flex-col justify-center items-center'>
      <h1 className='w-full p-2 font-bold text-center text-2xl sm:text-4xl md:text-6xl bg-clip-text bg-gradient-to-b from-stone-300 to-neutral-700 antialiased text-transparent'>Contact Details</h1>
    <div className='flex flex-col text-xl text-slate-400 font-semibold justify-center  items-center  gap-4'>
        <h1><span className='text-neutral-00 opacity-75'>📧</span>lastlife@gmail.com</h1>
        <h1>Instagram Page link</h1>
        <h1>WhatsApp Group link </h1>
        </div>
    </div>
  )
}

export default Contact
