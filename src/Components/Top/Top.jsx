import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Top = () => {
  return (
    <div className=' bg-third p-3'>
        <div className='max-w-[1240px]'>
           

            <div className='md:grid grid-cols-2 px-10'>
                <div className=' hidden md:block  col-span-1'>
                    <div className=''>
                    <ul className='text-white flex gap-5 px-5'>
                    <li>Call Us: 548978478</li>
                    <li> Email us: taj24@example.com</li>
                </ul>
                    </div>


                </div>

                <div className='col-span-1'>
                    <div className='flex items-center gap-5 justify-end  text-white'>
                        <div className='flex items-center gap-2'>
                        <span><FaClock /></span>
                        <h4>06:00 am - 06:00 pm</h4>

                        </div>
                        <div>
                        <ul className='flex  gap-3 text-white   '>
                        <li className='hover:text-primary'><FaFacebookF /></li>
                        <li className='hover:text-primary'><FaTwitter /></li>
                        <li className='hover:text-primary'><AiFillInstagram /></li>
                        <li className='hover:text-primary'><FaLinkedinIn /></li>
                    </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>


     
    </div>
  )
}

export default Top