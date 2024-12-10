import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = true;
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Title</h1>

                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-[#00798c] font-bold'} variant={"ghost"}>12 position</Badge>
                        <Badge className={'text-[#003049] font-bold'} variant={"ghost"}> Part Time</Badge>
                        <Badge className={'text-[#06d65d] font-bold'} variant={"ghost"}>20 LPA</Badge>
                    </div>
                </div>

                <Button disabled={isApplied} className={`rounded-xl ${isApplied ? 'bg-[#002f49d9] cursor-not-allowed' : 'bg-[#0e515be2] hover:bg-[#003049]'}`}>{isApplied ? 'Already Applide' : ' Apply Now'}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4' >Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>==</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>==</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>==</span></h1>
                <h1 className='font-bold my-1'> Salary:<span className='pl-4 font-normal text-gray-800'>==</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>==</span></h1>
                <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>==</span></h1>

            </div>
        </div>
    )
}

export default JobDescription