import Image from 'next/image';
import React from 'react'

export const TournamentSection = () => {
    const fetchedData: { Date: string, Time: string }[] = [
        { Date: "18 Nov 2024", Time: "16.00 O'Clock" },
        { Date: "19 Nov 2024", Time: " 6.00 O'Clock" },
        { Date: "20 Nov 2024", Time: "20.00 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "20 Nov 2024", Time: "24.30 O'Clock" },
        { Date: "22 Nov 2024", Time: " 8.00 O'Clock" },
        { Date: "25 Nov 2024", Time: "10.00 O'Clock" },
    ]
    return (
        <div className=' w-full  h-fit md:min-h-[500px] bg-gradient-to-b py-4 flex flex-col justify-around items-center from-neutral-900 to-slate-800 '>
            <h1 className='w-full p-2 font-bold text-center text-2xl sm:text-4xl md:text-6xl bg-clip-text bg-gradient-to-b from-stone-300 to-neutral-700 antialiased text-transparent'> <span className='text-transparent'>Find you Tournament</span></h1>
            <div className='w-full py-4 remove-scrollbar px-10 snap-x  flex  items-center gap-10  overflow-x-scroll h-fit'>
                {fetchedData.map((val, index) => (<TournamentItem item={val} key={index} />))}

            </div>
        </div>
    )
}

export const TournamentItem = ({ item }: { item: { Date: string, Time: string } }) => {

    return (
        <div className=' min-w-[180px] max-w-[215px] min-h-[] sm:min-w-[200px]  sm:max-w-[240px] shadow-inner relative  overflow-hidden    shadow-stone-700 snap-center sm:min-h-[350px] sm:max-h-[320px] bg-gradient-to-b from-slate-800 to-neutral-900 rounded-lg border-2 flex flex-col  items-center justify-center text-stone-300 font-bold break border-yellow-800  '>
            <div className='w-full sm:min-h-[250px]  bg-yellow-300 relative rounded-lg aspect-square sm:max-w-11/12 border-b-[1px] border-gray-700 '>
                <Image src={'/HeroSM.jpg'} alt={'sorry'} fill objectFit='fill' />
            </div>

            <div className='w-full p-2
             min-h-[100px] absolut bottom-0'>

                <h1 className='text-xl antialiased text-orange-600'>{item.Date}</h1>
                <h1 className='text-stone-400'>{item.Time}</h1>

                <div className='w-full h-fit flex justify-center mt-2 items-center'>
                    <p className='bg-gradient-to-t form-stone-800 to-neutral-900 text-orange-400  hover:text-stone-300 border-neutral-500 border-[1px] hover:border-stone-600  px-2 rounded-lg'>Register</p>
                </div>
            </div>

        </div>
    )
}

