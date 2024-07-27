import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

import { MdOutlineMarkEmailUnread } from "react-icons/md";

import { MdLocationPin } from "react-icons/md";
import tajlogo from '../../assets/tajlogo.jpg'

const Footer = () => {
  return (
   
        <div className=''>
            <div className='max-w-[1240px] bg-primary pb-14'>
                <div className='md:grid grid-cols-3 px-10 pt-10 pb-5  gap-10 items-center'>
                    <div className='col-span-1'>
                        <div className='py-10 ml-5'>
                            <img  className='w-[40%] rounded-full' src={tajlogo} alt="" />
                        </div>

                        <div>
                        <div className='pb-10 px-5'>
                            <p className='text-white'>
                            Taj Pharma Nepal Limited manufactures and distributes medicines. The company’s products include prescription solutions, lifesaving drugs, anti-cancer drugs, veterinary products, consumer brands, and CNS drugs.</p>
                        </div>

                        <div className='px-5'>
                        <ul className='flex  gap-6 text-white text-2xl   '>
                        <li className='transition-all cursor-pointer'><FaFacebookF /></li>
                        <li className='transition-all cursor-pointer'><FaTwitter /></li>
                        <li className='transition-all cursor-pointer'><AiFillInstagram /></li>
                        <li className='transition-all cursor-pointer'><FaLinkedinIn /></li>
                         </ul>

                        </div>

                        </div>
                       

                       


                    </div>

                    <div className='col-span-1'> 
                        <div className='flex justify-between'>
                            <div className='text-white'>
                                <h4 className='font-semibold text-xl py-11'>Quick Links</h4>
                                 <ul>
                                    <li className='pb-4  transition-all cursor-pointer p-2'> About Us</li>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Our Work</li>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Contact Us</li>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Careers</li>
                                   



                                    
                                 </ul>

                            </div>

                            <div className='text-white'>
                                <h4 className='font-semibold text-xl py-11'>Our Associate Group</h4>
                                 <ul className='text-center'>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Spell SMS</li>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Spell Voice</li>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Spell Digital Media</li>
                                    <li className='pb-4   transition-all cursor-pointer p-2'> Spell Hosting</li>
                                    



                                   



                                    
                                 </ul>

                            </div>
                        </div>

                    </div>


                    <div className='col-span-1'>
                        <h4 className='font-semibold text-xl py-11 text-white'>Contact Us</h4>

                        <div>
                    <div className='flex items-center gap-3 pb-6'>
                    
                    <IoCallSharp className='text-2xl text-white   ' />
                    
                    <div className='text-white  '>
                        <h5> +977-01-4422911</h5>
                        <h5>443457</h5>
                   
                    
                    </div>


                    </div>

                    <div className='flex items-center gap-3 pb-6'>
                    
                    <MdOutlineMarkEmailUnread  className='text-2xl text-white ' />
                    
                    <div className='text-white'>
                    <h5> tajgroupnepal@tajgroupnepal.com</h5>
                        <h5> tajgroupnepal@tajgroupnepal.com
                        </h5>
                        
                   
                    
                    </div>


                    </div>

                    <div className='flex items-center gap-3 pb-6'>
                    
                    <MdLocationPin  className='text-2xl text-white ' />
                    
                    <div className='text-white '>
                        <h5> Hattisar-01, Kathmandu</h5>
                        <h5>Nepal</h5>
                        
                        

                    
                    </div>


                    </div>
                   

                </div>

                    </div>

                </div>
               

                <div className='md:grid grid-cols-1 bg-primary pt-16    px-5'>

                    

                    <p className='text-white pt-5 px-10 border-t-2'>© 2023 Copyright by Taj Pharma Nepal | Taj Pharma Group  All rights reserved.</p>


                  
                 
                   

                  


                </div>

            </div>

        </div>

    
  )
}

export default Footer