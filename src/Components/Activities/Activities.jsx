import React from 'react'
import news1 from '../../assets/news1.jpg'
import news2 from '../../assets/news2.jpg'
import news3 from '../../assets/news3.jpg'
import { CgCalendarDates } from "react-icons/cg";
import { Link } from 'react-router-dom';



const Activities = () => {
  return (
    <div>
        <div className='max-w-[1240px]'>
            <div className='md:grid grid-cols-1 py-10 px-10'>
                <h2 className='font-semibold text-3xl text-third'>HEALTHCARE News & Insights</h2>
                <p className='text-textpara py-2'>Latest Health News, Diet, Fitness, Medical, Nutrition News</p>

            </div>

            <div className='md:grid grid-cols-3 gap-6 px-10 pb-20'>
                <div className='col-span-1'>
                    <div>
                    <Link to='/News'>
                        
                        
                   
                        <img className='rounded-xl shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px] cursor-pointer' src={news1} alt="" />
                        <div className='flex gap-16 py-4 px-10'>
                        <p> By TAJ</p>
                        <div className='flex items-center'>
                        <CgCalendarDates className='text-[#104BCA] text-lg' />
                        <h5 className='hover:text-[#104BCA]'>April 10, 2022</h5>

                        

                        </div>

                      
                        </div>
                        <div>
                        <h2 className='font-semibold text-xl px-2 text-textheadh3 pb-4 hover:text-third cursor-pointer'>
                           
                        
                        Govt continues monitoring pharmacy sector: Health Minister 

                       
                        
                        
                        </h2>
                        </div>
                        </Link>
                        
                        
                    </div>

                </div>

                <div className='col-span-1 py-6 md:py-0'>
                    <div className=''>
                         <Link to='/News'>
                        <img className='rounded-xl shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px]' src={news2} alt="" />
                        <div className='flex gap-16 py-4 px-10'>
                        <p> By TAJ</p>
                        <div className='flex items-center'>
                        <CgCalendarDates className='text-[#104BCA] text-lg' />
                        <h5 className='hover:text-[#104BCA]'>April 10, 2022</h5>

                        

                        </div>

                      
                        </div>
                        <div>
                        <h2 className='font-semibold text-xl px-2 text-textheadh3 pb-4 hover:text-third'>
                        Govt continues monitoring pharmacy sector: Health Minister 
                        
                        </h2>
                       
                        </div>
                        </Link>
                        
                    </div>

                </div>

                <div className='col-span-1'>
                    <div>
                        <Link to='/News'>
                        <img className='rounded-xl shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px]' src={news3} alt="" />
                        <div className='flex gap-16 py-4 px-10'>
                        <p> By TAJ</p>
                        <div className='flex items-center'>
                        <CgCalendarDates className='text-[#104BCA] text-lg' />
                        <h5 className='hover:text-[#104BCA]'>April 10, 2022</h5>

                        

                        </div>

                      
                        </div>
                        <div>
                        <h2 className='font-semibold text-xl px-2 text-textheadh3 pb-4 hover:text-third'>
                        Govt continues monitoring pharmacy sector: Health Minister 
                        
                        </h2>
                        </div>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Activities