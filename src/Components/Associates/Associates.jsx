import React from 'react'
import tajlogo from '../../assets/tajlogo.jpg'

const Associates = () => {
  return (
   <div>

<h2 className='font-semibold text-3xl text-third text-center pt-16'>Our Associates & Partners</h2>

   
<div className='max-w-[1240px] px-24 pt-44 pb-10 z-50 '>
   
<div className='shadow-2xl border-2 bg-slate-50  overflow-hidden mt-[-130px] '>

    <div className='  md:grid grid-cols-5 hidden   py-12 animate-loop-scroll   '>

      
       <div className='col-span-1 flex justify-center'>
       <img className='w-[50%]' src={tajlogo} alt="" />
       </div>
       <div className='col-span-1 flex justify-center'>
       <img className='w-[50%]' src={tajlogo} alt="" />
       </div>
       <div className='col-span-1 flex justify-center'>
       <img className='w-[50%]' src={tajlogo} alt="" />
       </div>
       <div className='col-span-1 flex justify-center'>
       <img className='w-[50%]' src={tajlogo} alt="" />
       </div>
       <div className='col-span-1 flex justify-center'>
       <img className='w-[50%]' src={tajlogo} alt="" />
       </div>

     

       </div>




      
   

   </div>
</div>
</div>
  )
}

export default Associates