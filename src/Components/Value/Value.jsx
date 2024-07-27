import React from 'react'
import value from '../../assets/value.jpg'

const Value = () => {
  return (
    <div>
        <div className='max-w-[1240px]'>
            <div className='md:grid grid-cols-2 gap-10 items-center py-10'>
                <div className='col-span-1 px-6'>
                    <div>
                        <img className='w-[80%]' src={value} alt="" />
                    </div>

                </div>
                <div className='col-span-1'>
                    <div>
                        <h3 className='font-semibold text-third text-xl pb-6'>Our Mission</h3>
                        <h2 className='text-4xl font-bold pb-6 text-textheadh3'>High standard & reliable solution.</h2>
                        
                        <p className='text-gray-500 pb-8'>We intend to achieve the reputation of a quality, high standard and reliable solution and service Provider Company in the IT industry. The organization is not just for creating and selling innovative products but it is for solving the client desires in the best possible way.</p>
                    </div>

                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Value