import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

import { MdOutlineMarkEmailUnread } from "react-icons/md";

import { MdLocationPin } from "react-icons/md";
import tajlogo from '../../assets/tajlogo.png'

const Footer = () => {
  return (
    <div className=''>
        <div className='bg-third pb-14'>
            <div className='max-w-[1240px]'>
                <div className='grid grid-cols-3 px-10 gap-10'>
                    <div className='col-span-1'>
                        <div className='py-10'>
                            <img className='w-[50%]' src={tajlogo} alt="" />
                        </div>
                        <div className='pb-10'>
                            <p className='text-white'>
                            Taj Pharma India Limited manufactures and distributes medicines. The company’s products include prescription solutions, lifesaving drugs, anti-cancer drugs, veterinary products, consumer brands, and CNS drugs.</p>
                        </div>

                        <div className=''>
                        <ul className='flex  gap-6 text-white text-2xl   '>
                        <li className='hover:text-primary'><FaFacebookF /></li>
                        <li className='hover:text-primary'><FaTwitter /></li>
                        <li className='hover:text-primary'><AiFillInstagram /></li>
                        <li className='hover:text-primary'><FaLinkedinIn /></li>
                    </ul>

                        </div>


                    </div>

                    <div className='col-span-1'> 
                        <div className='flex justify-between'>
                            <div className='text-white'>
                                <h4 className='font-semibold text-xl py-11'>Quick Links</h4>
                                 <ul>
                                    <li className='pb-4 hover:text-primary transition-all cursor-pointer p-2'> About Us</li>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Our Work</li>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Contact Us</li>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Careers</li>
                                   



                                    
                                 </ul>

                            </div>

                            <div className='text-white'>
                                <h4 className='font-semibold text-xl py-11'>Our Associate Group</h4>
                                 <ul className='text-center'>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Spell SMS</li>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Spell Voice</li>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Spell Digital Media</li>
                                    <li className='pb-4  hover:text-primary transition-all cursor-pointer p-2'> Spell Hosting</li>
                                    



                                   



                                    
                                 </ul>

                            </div>
                        </div>

                    </div>


                    <div className='col-span-1'>
                        <h4 className='font-semibold text-xl py-11 text-white'>Contact Us</h4>

                        <div>
                    <div className='flex items-center gap-3 pb-6'>
                    
                    <IoCallSharp className='text-2xl text-white hover:text-primary  ' />
                    
                    <div className='text-white hover:text-primary '>
                        <h5> 01-5910781</h5>
                        <h5>+977 9848048781</h5>
                   
                    
                    </div>


                    </div>

                    <div className='flex items-center gap-3 pb-6'>
                    
                    <MdOutlineMarkEmailUnread  className='text-2xl text-white hover:text-primary ' />
                    
                    <div className='text-white hover:text-primary'>
                    <h5> info@spellinnovation.com</h5>
                        <h5>Contact@spellinnovation.com
                        </h5>
                        
                   
                    
                    </div>


                    </div>

                    <div className='flex items-center gap-3 pb-6'>
                    
                    <MdLocationPin  className='text-2xl text-white hover:text-primary' />
                    
                    <div className='text-white hover:text-primary'>
                        <h5> Pipal bot, Mid baneswor</h5>
                        
                        

                    
                    </div>


                    </div>
                   

                </div>

                    </div>

                </div>

                <div className='grid grid-cols-1 bg-third   px-10'>

                    

                    <p className='text-white pt-14 '>© 2023 Copyright by Taj Pharma India | Taj Pharma Group  All rights reserved.</p>


                  
                 
                   

                  


                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer