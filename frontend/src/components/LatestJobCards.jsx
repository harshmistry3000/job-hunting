import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-emerald-100 cursor-pointer'>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas impedit esse, vero doloribus obcaecati delectus corrupti totam fugit, at atque, pariatur rerum nobis id voluptates neque quo voluptatum labore.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
    <Badge className={'text-[#00798c] font-bold'} variant={"ghost"}>12 position</Badge>
    <Badge className={'text-[#003049] font-bold'} variant={"ghost"}> Part Time</Badge>
    <Badge className={'text-[#06d65d] font-bold'} variant={"ghost"}>20 LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards