import { Popover, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { PopoverContent } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogIn, LogOut, User2 } from 'lucide-react'

const Navbar = () => {

    const user = false;
    return (
        <div className='bg-white'>

            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-4xl text-[#003566] font-bold' >JOB <span className='text-[#FFC300]'>HUNT</span> </h1>
                </div>
                <div className='flex items-center gap-16'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Job</li>
                        <li>Browse</li>
                    </ul>


                    {
                        !user ? (
                            <div className='flex items-center gap-3'>
                                <Link to="/login"><Button variant="secondary" className="bg-[#ffe45eb0] hover:bg-[#FFD60A]"> Login</Button></Link>
                                <Link to="/signup"><Button variant="" className="bg-[#003566] hover:bg-[#001D3D]" >Signup </Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>

                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>

                                </PopoverTrigger>
                                <PopoverContent className="w-80">

                                    <div className=''>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'> peter parker</h4>
                                            <p>spider man</p>
                                        </div>
                                        <div className='flex flex-col my-2 gap-1 text-[#118ab2]'>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>

                                                <User2 /> <
                                                    Button variant="ghost">View Profile</Button>
                                            </div>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button variant="ghost">Logout</Button>
                                            </div>
                                        </div>

                                    </div>



                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar