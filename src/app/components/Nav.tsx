'use client';
import React from 'react'

const Nav = () => {

    const scrollToDiv = (sectionId:string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Calculate the offset to scroll the section into the center of the viewport
          const offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2);
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      };
    return (
        <nav className='w-11/12 fixed top-2  bg-stone-300 opacity-50 border-neutral-600 border-[1px]  h-11 sm:h-14 flex px-4 sm:px-10 sm:w-11/12 lg:w-9/12 rounded-md z-20 shadow-md shadow-neutral-500 justify-between items-center'>
            <div className='bg-clip-text select-none  bg-gradient-to-b from-stone-800 via-slate-800 to-neutral-800'>   <h1 className='font-bold text-transparent   antialiased text-2xl'>LastLife</h1></div>
            <div className='flex gap-6 font-semibold text-orange-600 antialiased cursor-pointer '>
                <p onClick={()=>  scrollToDiv('Home')} className='hidden sm:block relative px-2  underlying cursor-pointer hover:text-orange-500'>Home</p>
                <p onClick={()=> scrollToDiv('#')} className={` px-1 underlying cursor-pointer relative hover:text-orange-500`} >UpComing Event</p>
                <p onClick={()=> scrollToDiv('#')} className='hidden sm:block relative  px-2  underlying hover:text-orange-500 '>Contact</p>
            </div>

        </nav>
    )
}

export default Nav
