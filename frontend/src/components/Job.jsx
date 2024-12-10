import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate =useNavigate();
    const jobId ="981y39y9y98";
    return (
        <div className='p-5 rounded-md shadow-xl bg-white boreder border-emerald-50'>
            <div className='flex items-center justify-between'>

                <p className='text-sm text-gray-500'>3 day ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>


                <Button className="p-6" variant="outline" size="icon" >
                    <Avatar>
                        <AvatarImage src="https://media.istockphoto.com/id/1189287855/vector/save-the-world.jpg?s=612x612&w=0&k=20&c=JIzNuL8M9uDlHVcyF5YSId4qRyYejaWwyT6qvZmaVCk= " />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div >
                <h1 className='font-bold' text-lg my-2 >Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod atque incidunt dolorum molestiae natus consequatur repellat ratione corrupti numquam laborum cumque praesentium eos veritatis quia esse aperiam, et sit?</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#00798c] font-bold'} variant={"ghost"}>12 position</Badge>
                <Badge className={'text-[#003049] font-bold'} variant={"ghost"}> Part Time</Badge>
                <Badge className={'text-[#06d65d] font-bold'} variant={"ghost"}>20 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline">Details</Button>
                <Button className="bg-[#003566]">Save for Later</Button>
            </div>
        </div>
    )
}

export default Job