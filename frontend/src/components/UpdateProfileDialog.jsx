import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setloading] = useState(false);
    const {user} =useSelector(store=>store.auth);

    const [input,setInput] = useState({
        fullname:user?.fullname,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile?.skills?.map(skill=>skill),
        file:user?.profile?.resume 
    });
// 6 58 35 

    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>
                            Update Profile
                        </DialogTitle>
                    </DialogHeader>
                    <form action="">
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>

                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={input.fullname}
                                    className="col-span-3"
                                />
                            </div>
                            {/* email */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={input.email}
                                    className="col-span-3"
                                />
                            </div>
                            {/* Number */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className="text-right">Number</Label>
                                <Input
                                    id="number"
                                    name="number"
                                    value={input.phoneNumber}
                                    className="col-span-3"
                                />
                            </div>
                            {/* bio */}
                            <div className='grid grid-cols-4 items-center gap-4'>

                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    className="col-span-3"
                                />
                            </div>

                            {/* skills */}
                            <div className='grid grid-cols-4 items-center gap-4'>

                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    className="col-span-3"
                                />
                            </div>
                            {/* cv */}
                            <div className='grid grid-cols-4 items-center gap-4'>

                                <Label htmlFor="file" className="text-right">Resume</Label>
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                // --- for loding button 
                                loading ? <Button className="w-full my-4 bg-[#135c84] hover:bg-[#02028a]"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait </Button> : <Button type="submit" text="Submit" className="w-full my-4 bg-[#0077b6] hover:bg-[#023e8a]">Update</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog