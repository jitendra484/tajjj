import React from 'react'
import tes from '../../assets/tes.png'
import test1 from '../../assets/test1.png'
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div>
      <div className='max-w-[1240px]'>
        <h3 className='font-medium text-third text-xl py-6 text-center'>Testimonials</h3>
        <h2 className='font-semibold text-textheadh3 text-3xl text-center'>What Our Client Says</h2>
        <div className='md:grid grid-cols-3 px-10 gap-6'>
          <div className='col-span-1  py-8'>

          <div className=' hover:bg-[#F5F4FF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-white border rounded-md p-6 shadow-[rgba(0,_0,_0,_0.14)_0px_3px_10px]'>

           <div className='flex justify-between'>

           <div className='flex items-center gap-3'>

           <img src={tes} alt="" />

           <div>
            <h2 className='font-semibold'>John Legend</h2>
           <h5 className='text-gray-600'>Web Design</h5>

        </div>





           </div>
           <RiDoubleQuotesR className='font-semibold text-6xl text-[#104BCA]' />
          </div>

        <p className='px-5 text-start py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officia culpa quas sint amet? Non, earum consequuntur suscipit delectus sint!</p>



         </div>


          </div>

          <div className='col-span-1  py-8'>

          <div className=' hover:bg-[#F5F4FF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white border rounded-md p-6 shadow-[rgba(0,_0,_0,_0.14)_0px_3px_10px]'>

           <div className='flex justify-between'>

           <div className='flex items-center gap-3'>

           <img src={test1} alt="" />

           <div>
          <h2 className='font-semibold'>John Legend</h2>
           <h5 className='text-gray-600'>Web Design</h5>

        </div>





           </div>
           <RiDoubleQuotesR className='font-semibold text-6xl text-[#104BCA]' />
          </div>

        <p className='px-5 text-start py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officia culpa quas sint amet? Non, earum consequuntur suscipit delectus sint!</p>



         </div>


          </div>

          <div className='col-span-1  py-8'>

          <div className=' hover:bg-[#F5F4FF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white border rounded-md p-6 shadow-[rgba(0,_0,_0,_0.14)_0px_3px_10px]'>

           <div className='flex justify-between'>

           <div className='flex items-center gap-3'>

           <img src={tes} alt="" />

           <div>
          <h2 className='font-semibold'>John Legend</h2>
           <h5 className='text-gray-600'>Web Design</h5>

        </div>





           </div>
           <RiDoubleQuotesR className='font-semibold text-6xl text-[#104BCA]' />
          </div>

        <p className='px-5 text-start py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officia culpa quas sint amet? Non, earum consequuntur suscipit delectus sint!</p>



         </div>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Testimonials