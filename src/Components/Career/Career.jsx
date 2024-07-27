import React from 'react'
import career from '../../assets/career.png'
import { GoDotFill } from "react-icons/go";
import Button from '../../Layout/Button';
import {  useNavigate, Link} from 'react-router-dom';









const Career = () => {
    const  navigate= useNavigate();
  return (
    <>
    <div className=''>
        <div className='w-max-[1240px] py-6'>
            <div className='md:grid grid-cols-2 px-10 gap-28'>
                <div className='col-span-1 px-10 py-6'>
                    <h3 className='text-third font-semibold pb-6 text-3xl'>Career</h3>
                    <h2 className='text-4xl font-bold pb-6'>Be you, with us</h2>
                    <p  className='text-gray-500 pb-8'>Join us from around the Nepal on our mission to reinvent the way people build things online. Join us</p>



                </div>

                <div className='col-span-1 px-10'>
                    <img className='w-[80%]' src={career} alt="" />

                </div>

            </div>


            <div className='py-10'>
                <h3 className='text-third font-semibold py-10 text-2xl px-48'>Job Opening</h3>

                

            </div>
 
           

            <div className='md:grid grid-cols-5 py-6'>
                
                <div className='col-span-4 md:ml-32'>
                <div className='md:flex justify-between px-5 items-center bg-fourth '>
                    <div className='px-20'>
                        <div className='py-3'>
                            <h3 className='font-medium text-xl text-textheadh3'>Marketing Assistance</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Full Time</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'> 2 Post opening
                        </p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'> 
                        1 Year in Marketing</p>
                        </div>
                       
                       

                    </div>
                    <div className='ml-20 py-5'>
                    {/* <Button    title= 'View Details'   /> */}
                    <button className='bg-third px-5 py-2 font-medium text-white rounded-xl'><Link to='/Jobdetail'>View Details</Link></button>
                    {/* <button onClick={()=>navigate('./Jobdetails')} className='bg-third px-5 py-2 font-medium text-white rounded-xl'>View Details</button> */}

                    </div>
                </div>

                </div>
               

            </div>

            <div className='md:grid grid-cols-5 py-6'>
                
                <div className='col-span-4 md:ml-32'>
                <div className='md:flex justify-between px-5 items-center bg-fourth '>
                    <div className='px-20'>
                        <div className='py-3'>
                            <h3 className='font-medium text-xl text-textheadh3'>Marketing Assistance</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Full Time</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'> 2 Post opening
                        </p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'> 
                        1 Year in Marketing</p>
                        </div>
                       
                       

                    </div>
                    <div className='ml-20 py-5'>
                    {/* <Button    title= 'View Details'   /> */}
                    <button className='bg-third px-5 py-2 font-medium text-white rounded-xl'><Link to='/Jobdetail'>View Details</Link></button>
                    {/* <button onClick={()=>navigate('./Jobdetails')} className='bg-third px-5 py-2 font-medium text-white rounded-xl'>View Details</button> */}

                    </div>
                </div>

                </div>
               

            </div>

        </div>
    </div>
    
    </>
  )
}

export default Career