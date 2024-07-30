import React from 'react'
import mission from '../../assets/mission.jpg'

const Mission = () => {
  return (
    <div>
        <div className=''>
            <div className='md:grid grid-cols-2 gap-20 xl:gap-32 py-10 px-10 items-center'>
                <div className='col-span-1'>
                    <div>
                        <img src={mission} alt="" />
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

export default Mission