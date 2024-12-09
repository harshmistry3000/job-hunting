import React from 'react'
import LatestJobCards from './LatestJobCards';
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-3xl font-bold'><span className='text-[#0096c7]'>Latest & Top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    randomJobs.slice(0,6).map((item,index)=><LatestJobCards/>)
                    // 5 10
                }
            </div>
        </div>
  )
}

export default LatestJobs