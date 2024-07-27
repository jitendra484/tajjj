import React from 'react'
import { IoCallSharp } from "react-icons/io5";

import { MdOutlineMarkEmailUnread } from "react-icons/md";

import { MdLocationPin } from "react-icons/md";
import Button from '../../Layout/Button';
import ReCAPTCHA from "react-google-recaptcha";




const Contact = () => {
    const onChange=()=> {

    };
  return (

    

    <div className='max-w-[1240px] py-6'>
        <div className='md:grid grid-cols-3 gap-5 px-20'>
            <div className='col-span-1 py-5'>
                <h3 className='text-third font-semibold pb-6 text-xl'>Contact Us</h3>
                <h2 className='text-4xl font-bold pb-6'>If you have any enquiry, Please contact us</h2>
                <p className='text-gray-500 pb-8'>Taj Pharma India's business can be contacted by below quick query ; you shale be forwarded to the relevant departments; additionally, telephone lines +91 - 22 - 2637 4592 / 2637 4593 can be utilised if -you have an enquiry about the company, our healthcare business, or one of our medicines at India Standard Time (IST).</p>

                <div>
                    <div className='flex items-center gap-3 pb-6'>
                    
                    <IoCallSharp className='text-2xl text-third' />
                    
                    <div className='text-[#374253]'>
                        <h5> 01-5910781</h5>
                        <h5>+977 9848048781</h5>
                   
                    
                    </div>


                    </div>

                    <div className='flex items-center gap-3 pb-6'>
                    
                    <MdOutlineMarkEmailUnread  className='text-2xl text-third' />
                    
                    <div className='text-[#374253]'>
                    <h5> info@spellinnovation.com</h5>
                        <h5>Contact@spellinnovation.com
                        </h5>
                        
                   
                    
                    </div>


                    </div>

                    <div className='flex items-center gap-3 pb-6'>
                    
                    <MdLocationPin  className='text-2xl text-third' />
                    
                    <div className='text-[#374253]'>
                        <h5> Pipal bot, Mid baneswor</h5>
                        
                        

                    
                    </div>


                    </div>
                   

                </div>

            </div>


            <div className='md:col-span-2 md:px-28 pt-24'>
                <div className='pb-10'>
                    <label className='font-medium'>Full Name:</label>
                    <div className='mt-2'>
                    
                    
                    <input className='p-3 border-2 rounded-lg w-[100%] ' type="text" placeholder='Your name' required />
                    </div>

                </div>

                <div className='pb-10'>
                    <label className='font-medium'>Email:</label>
                    <div className='mt-2'>
                    
                    
                    <input className='p-3 border-2 rounded-lg w-[100%] ' type="mail" placeholder='Your Email' required />
                    </div>

                </div>

                <div className='pb-10'>
                    <label className='font-medium'>Phone: </label>
                    <div className='mt-2'>
                    
                    
                    <input className='p-3 border-2 rounded-lg w-[100%] ' type="tel" placeholder='Your Phone' required />
                    </div>

                </div>

                <div className='pb-10'>
                    <label className='font-medium'>Message:</label>
                    <div className='mt-2'>
                    
                    
                    <input className='p-3 border-2 rounded-lg w-[100%] h-[100px] ' type="text" placeholder='Your name' required />
                    </div>

                </div>

                <div className='py-5'>
                <ReCAPTCHA
                sitekey="6LcS1BYqAAAAAIbStaWCzXoT5ZpGK8xtozaA_-Qx"
                onChange={onChange}
                />
                </div>



                <Button title=" Submit"/>

                

                

                

              

            </div>

        </div>
        <div>
            <div className='md:grid grid-cols-1 pt-40 '>


            <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14807.794374741177!2d85.32944869170767!3d27.69464588485492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1721148934951!5m2!1sen!2snp"
              height="500" width="100%"
            
            allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    
  )
}

export default Contact