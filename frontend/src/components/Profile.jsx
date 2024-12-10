import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'

const skills = ["Html", "Css", "Js", "Three.js", "react.js"]
const isResume = true; 

const Profile = () => {
    const [open,setOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className='flex justify-between gap-4'>

                    <div className='flex items-center gap-4'>

                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://media.istockphoto.com/id/1189287855/vector/save-the-world.jpg?s=612x612&w=0&k=20&c=JIzNuL8M9uDlHVcyF5YSId4qRyYejaWwyT6qvZmaVCk=" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, adipisci?</p>
                        </div>
                    </div>
                    <Button  onClick={()=> setOpen(true)} className="text-right" variant="outline" ><Pen /></Button>
                </div>


                <div className='m-5'>
                    <div className='flex items-center gap-3 m-2'>

                        <Mail />
                        <span>rrr@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 m-2'>

                        <Contact />
                        <span>1234567890</span>
                    </div>
                </div>
                <div className='m-5'>
                    <h1 >Skills</h1>
                    <div className='flex items-center gap-1'>

                        {
                            skills.length != 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href='https://github.com/harshmistry3000' className='text-blue-500 w-full hover:underline cursor-pointer'>harshmistry3000</a> : <span>Na</span>
                    }
                </div>
            </div>
                <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5' >Applied Jobs</h1>
                    <AppliedJobTable/>
                </div>
                <UpdateProfileDialog open={open} setopen={setOpen}/>
        </div>
    )
}

export default Profile