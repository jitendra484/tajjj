import React from 'react'
import partner1 from '../../assets/partner1.jpeg'
import partner2 from '../../assets/partner2.jpeg'
import partner3 from '../../assets/partner3.png'
import partner5 from '../../assets/partner5.png'
import { Link } from 'react-router-dom'

const Partners = () => {
  return (
    <div>
        <div className='mx-10'>
        <h2 className='font-semibold text-third text-2xl text-center py-6'>Our Associates & Partners</h2>
            <div className='md:grid grid-cols-4 py-10 gap-10 xl:gap-24 px-10'>
                <div className='col-span-1 pb-10'>
                    <Link to='/Partner1'>
                    
                   

                    <div className='  bg-fourth transition-all cursor-pointer p-3 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='mx-auto' src={partner1} alt="" />
                    <h2 className='font-medium text-lg text-textpara text-center'>Nepal Pharmaceuticals Laboratory Pvt. Ltd.</h2>
                </div>
                </Link>

                </div>


                <div className='col-span-1 pb-10'>
                <Link to='/Partner1'>
                   

                    <div className='  bg-fourth transition-all cursor-pointer p-3 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='mx-auto' src={partner2} alt="" />
                    <h2 className='font-medium text-lg text-textpara  text-center'>Deurali-Janta
                    Pharmaceuticals.</h2>
                </div>
                </Link>

                </div>


                <div className='col-span-1 pb-10'>
                <Link to='/Partner1'>
                   

                    <div className='  bg-fourth transition-all cursor-pointer p-3 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='mx-auto' src={partner3} alt="" />
                    <h2 className='font-medium text-lg text-textpara text-center'>Nepal Pharmaceuticals Laboratory Pvt. Ltd.</h2>
                </div>
                </Link>

                </div>

                <div className='col-span-1 pb-10'>
                    <Link to='/Partner1'>
                    
                   

                    <div className='  bg-fourth transition-all cursor-pointer p-3 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='mx-auto' src={partner1} alt="" />
                    <h2 className='font-medium text-lg text-textpara text-center'>Nepal Pharmaceuticals Laboratory Pvt. Ltd.</h2>
                </div>
                </Link>

                </div>
               

            </div>

        </div>
    </div>
  )
}

export default Partners