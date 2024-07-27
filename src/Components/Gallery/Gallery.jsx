import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'

import { IoCalendarOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Gallery = () => {
  return (
    <div className='bg-[#F6F7F7]'>
        <h2 className=' px-20 py-10 font-semibold text-3xl text-third'>Our Events Gallery</h2>
        <div className='md:grid grid-cols-3 py-10 px-20'>
            
            <div className='col-span-1 py-8 md:py-0'>
                <div className=' '>
                    <Link to='/Galleryevent'>
                    
                   
                    <div className='bg-white p-5 w-72 shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] transition-all cursor-pointer ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200  '>
                    <img className=' h-72 rounded-md px-4' src={img1} alt="" />
                     <div className='flex items-center pt-3 gap-2'>
                     <p className='font-medium px-4  '>Event One</p>
                     <IoCalendarOutline  className='text-third'/>
                     <p className='text-third'>July 26, 2024</p>
                     </div>

                    </div>
                   
                   
                    </Link>
                </div>

            </div>

            <div className='col-span-1 pb-8 md:pb-0 '>
                <div className=' '>
                <Link to='/Galleryevent'>
                
                    <div className='bg-white p-5 w-72 shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] transition-all cursor-pointer ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200  '>
                    <img className=' h-72 rounded-md px-4' src={img2} alt="" />
                     <div className='flex items-center pt-3 gap-2'>
                     <p className='font-medium px-4  '>Event Two</p>
                     <IoCalendarOutline  className='text-third'/>
                     <p className='text-third'>July 26, 2024</p>
                     </div>

                    </div>
                    </Link>
                   
                   

                </div>

            </div>

            <div className='col-span-1 '>
                <div className=' '>
                    <Link  to='/Galleryevent'>
                    
                    <div className='bg-white p-5 w-72 shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] transition-all cursor-pointer ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200  '>
                    <img className=' h-72 rounded-md px-4' src={img1} alt="" />
                     <div className='flex items-center pt-3 '>
                     <p className='font-medium px-4  '>Event Three</p>
                     <IoCalendarOutline  className='text-third'/>
                     <p className='text-third'>July 26, 2024</p>
                     </div>

                    </div>
                    </Link>
                   
                   

                </div>

            </div>

        </div>

        <div className='md:grid grid-cols-3 py-10 px-20'>
            <div className='col-span-1 '>
                <div className=' '>
                <Link  to='/Galleryevent'>
                
                    <div className='bg-white p-5 w-72 shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] transition-all cursor-pointer ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200  '>
                    <img className=' h-72 rounded-md px-4' src={img1} alt="" />
                     <div className='flex items-center pt-3 gap-2'>
                     <p className='font-medium px-4  '>Event One</p>
                     <IoCalendarOutline  className='text-third'/>
                     <p className='text-third'>July 26, 2024</p>
                     </div>

                    </div>
                    </Link>
                   
                   

                </div>

            </div>

            <div className='col-span-1 py-8 md:py-0  '>
                <div className=' '>
                <Link  to='/Galleryevent'>
                    <div className='bg-white p-5 w-72 shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] transition-all cursor-pointer ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200  '>
                    <img className=' h-72 rounded-md px-4' src={img2} alt="" />
                     <div className='flex items-center pt-3 gap-2'>
                     <p className='font-medium px-4  '>Event Two</p>
                     <IoCalendarOutline  className='text-third'/>
                     <p className='text-third'>July 26, 2024</p>
                     </div>

                    </div>
                    </Link>
                   
                   

                </div>

            </div>

            <div className='col-span-1 '>
                <div className=' '>
                <Link  to='/Galleryevent'>
                    <div className='bg-white p-5 w-72 shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] transition-all cursor-pointer ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200  '>
                    <img className=' h-72 rounded-md px-4' src={img1} alt="" />
                     <div className='flex items-center pt-3 '>
                     <p className='font-medium px-4  '>Event Three</p>
                     <IoCalendarOutline  className='text-third'/>
                     <p className='text-third'>July 26, 2024</p>
                     </div>

                    </div>
                    </Link>
                   
                   

                </div>

            </div>

        </div>
    </div>
  )
}

export default Gallery