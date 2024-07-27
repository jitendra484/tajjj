import React from 'react'
import vision from '../../assets/vision.jpeg'

const Vision = () => {
  return (
    <div>
         <div className='max-w-[1240px]'>
            <div className='grid grid-cols-2 gap-10 py-10 items-center'>
                <div className='col-span-1 px-16'>
                    <div>
                        <img src={vision} alt="" />
                    </div>

                </div>
                <div className='col-span-1'>
                    <div>
                        <h3 className='font-semibold text-third text-xl pb-6'>Our Mission</h3>
                        <h2 className='text-4xl font-bold pb-6 text-textheadh3'>100% customer satisfaction.</h2>
                        
                        <p className='text-gray-500 pb-8'>
                        Our Vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche.</p>
                    </div>

                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Vision