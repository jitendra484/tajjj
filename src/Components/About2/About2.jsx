import React from 'react'
import abp from '../../assets/abp.jpg'
import { GiMedicines } from "react-icons/gi";

import { AiFillMedicineBox } from "react-icons/ai";
<AiFillMedicineBox />
import { IoCall } from "react-icons/io5";
import Button from '../../Layout/Button';
<IoCall />

const About2 = () => {
  return (
    <div>
        <div className=' py-10 md:mx-20 mx-10'>
            <div className='md:grid grid-cols-3 gap-16 xl:gap-40 items-center'>
                <div className='col-span-2 '>
                    <div className='bg-[#F5F4FF] px-10 py-14'>

                    
                    <h2 className='text-third font-semibold  text-xl py-3'>About Us</h2>
                    <h4 className='font-semibold text-3xl pb-3'>Who We Are</h4>
                    <p className='text-[#596579] pb-3'>We are living in the era of Information Technology. There is no need to describe the importance and significance of the wide - spread use of information technology. Spell innovation private limited is a young company in Kathmandu, Nepal.</p>

                   <p className='text-[#596579] pb-3'>
                   We Spell innovation say we’re young because we’re peopled by young, energetic, curious and committed minds who are excited to solve one stop automated solution for your trade, industry, institution, organization and invention.
                    </p> 

                    <p className='text-[#596579] pb-3'> with a vision to leave behind a legacy of transformed peoples as an organization, we place a high emphasis on working in partnership with customers.</p>
                    </div>
                </div>

                <div className='col-span-1 py-10'>
                    <div className=''>
                        <img className='w-[90%] shadow-2xl ' src={abp} alt="" />
                    </div>

                </div>

            </div>
            <div className=''>
               
           

            <div className='md:grid grid-cols-3 py-10 '>

                <div className='col-span-1  '>
                    <div className='hover:shadow-2xl'>
                    <div className='bg-[#F5F4FF] text-[#596579] py-10 px-5   rounded-lg'>
                    <div className='flex gap-3 items-center'>
                        <div>
                        <GiMedicines className='text-third size-[45px] py-2 rounded-full   bg-white' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>THIRD PARTY PHARMA MANUFACTURING</h2>
                            {/* <p>THIRD PARTY PHARMA MANUFACTURING</p> */}
                        
                        

                        </div>
                    </div>

                    <div>
                        <p className=' py-5'>
                        With more than 24 Years of experience as a unit specializing in third party manufacturing of pharma under our belt, our products have been well accepted

                        </p>
                  

                    </div>
                    <button className='text-white font-medium hover:text-third'>Read More</button>

                    </div>

                    </div>

                   
                    
                    

                  


                </div>
 
                <div className='col-span-1  '>
                    <div className='hover:shadow-2xl'>
                    <div className='bg-[#F5F4FF] text-[#596579] py-10 px-5   rounded-lg'>
                    <div className='flex gap-3 items-center'>
                        <div>
                        <GiMedicines className='text-third size-[45px] py-2 rounded-full   bg-white' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>THIRD PARTY PHARMA MANUFACTURING</h2>
                            {/* <p>THIRD PARTY PHARMA MANUFACTURING</p> */}
                        
                        

                        </div>
                    </div>

                    <div>
                        <p className=' py-5'>
                        With more than 24 Years of experience as a unit specializing in third party manufacturing of pharma under our belt, our products have been well accepted

                        </p>
                  

                    </div>
                    <button className='text-white font-medium hover:text-third'>Read More</button>

                    </div>

                    </div>

                   
                    
                    

                  


                </div>

                <div className='col-span-1  '>
                    <div className='hover:shadow-2xl'>
                    <div className='bg-[#F5F4FF] text-[#596579] py-10 px-5   rounded-lg'>
                    <div className='flex gap-3 items-center'>
                        <div>
                        <GiMedicines className='text-third size-[45px] py-2 rounded-full   bg-white' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>THIRD PARTY PHARMA MANUFACTURING</h2>
                            {/* <p>THIRD PARTY PHARMA MANUFACTURING</p> */}
                        
                        

                        </div>
                    </div>

                    <div>
                        <p className=' py-5'>
                        With more than 24 Years of experience as a unit specializing in third party manufacturing of pharma under our belt, our products have been well accepted

                        </p>
                  

                    </div>
                    <button className='text-white font-medium hover:text-third'>Read More</button>

                    </div>

                    </div>

                   
                    
                    

                  


                </div>







             


            </div>

            </div>
            

        </div>

    </div>
  )
}

export default About2