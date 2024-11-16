import Image from 'next/image';
import React from 'react'

export const TournamentSection = () => {
    const fetchedData: string[] = [
        'lastlife',
        'lastlife',
        'lastlife',
        'lastlife',
        'lastlife',
        'lastlife',
        'lastlife',
        'lastlife',
        'lastlife',
    ];
    return (
        <div className=' w-full  h-fit md:min-h-[500px] bg-gradient-to-b py-4 flex flex-col justify-around items-center from-neutral-900 to-slate-800 '>
            <h1 className='w-full p-2 font-bold text-center text-2xl sm:text-4xl md:text-6xl bg-clip-text bg-gradient-to-b from-stone-300 to-neutral-700 antialiased text-transparent'> <span className='text-transparent'>Find you Tournament</span></h1>
        <div className='w-full py-4 remove-scrollbar px-10 snap-x  flex  items-center gap-10  overflow-x-scroll h-fit'>
            {fetchedData.map((val,index)=>(<TournamentItem item={`${val} ${index+1}`} key={index}/>))}
         
        </div>
        </div>
    )
}

export const TournamentItem = ({ item }: { item: string }) => {

    return (
        <div className='min-w-[200px] shadow-inner  shadow-stone-700 snap-center min-h-[250px] bg-gradient-to-b from-slate-800 to-neutral-900 rounded-lg border-2 flex items-center justify-center text-stone-300 font-bold break border-yellow-800 '>
            <Image src={'/'} alt={item} fill />
            <h1>{item}</h1>
        </div>
    )
}

