import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Top = () => {
  return (
    
        <div className=' bg-primary p-3'>
           

            <div className='md:grid grid-cols-2 px-10'>
                <div className=' hidden md:block  col-span-1'>
                    <div className=''>
                    <ul className='text-white flex gap-3 px-5'>
                    <li>Call: +977-01-4422911</li>
                    <li> Email: tajnepal@gmail.com</li>
                </ul>
                    </div>


                </div>

                <div className='col-span-1'>
                    <div className='flex items-center gap-5 justify-end  text-white'>
                        <div className='flex items-center gap-2'>
                        <span><FaClock /></span>
                        <h4>06:00 am - 09:00 pm</h4>

                        </div>
                        <div>
                        <ul className='flex  gap-3 text-white   '>
                        <li className=' transition-all cursor-pointer'><FaFacebookF /></li>
                        <li className=' transition-all cursor-pointer'><FaTwitter /></li>
                        <li className=' transition-all cursor-pointer'><AiFillInstagram /></li>
                        <li className=' transition-all cursor-pointer'><FaLinkedinIn /></li>
                    </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>


     
    
  )
}

export default Top