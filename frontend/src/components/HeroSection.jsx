import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-6 py-2 rounded-full bg-[#ffd60a83] text-[#03045e] font-medium'>Hey 🥷🏻 Warriors Ready to level up your career game ?</span>
                <h1 className='text-5xl font-bold text-[#013a63]'>Search ,Apply & <br /> Get Your <span className='text-[#0096c7]'>Dream Jobs </span></h1>
                <p>Discover opportunities, apply confidently, and achieve the career success you deserve! </p>
                <div className='flex w=[40%] shadow-lg border border-[#e3f2fd] pl-3 rounded-full items-center gap-4 mx-auto'>

                    <input type="text" 
                    placeholder='Find your dream Jobs '
                    className='outline-none border-none h-5 w-96'/>
                    
<Button  className="rounded-r-full bg-[#0096c7]">
<Search className='h-5 w-5'/>
</Button>

                </div>

            </div>
        </div>
    )
}

export default HeroSection