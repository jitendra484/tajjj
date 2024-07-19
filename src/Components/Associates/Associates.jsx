import React from 'react'
import tajlogo from '../../assets/tajlogo.png'

const Associates = () => {
  return (
    <div className='py-20'>
        <div className='max-w-[1240px] '>
        <h4 className='text-third font-semibold  text-xl text-center pb-14'  >Our Associate Business</h4>
            <div className='grid grid-cols-4 px-32 gap-3 border-2 p-8 ' >

                
                <div className='col-span-1'>
                    <img className='w-[50%]' src={tajlogo} alt="" />

                 </div>

                 <div className='col-span-1'>
                    <img className='w-[50%]' src={tajlogo} alt="" />

                 </div>
                   

                 <div className='col-span-1'>
                    <img className='w-[50%]' src={tajlogo} alt="" />

                 </div>
                   

                 <div className='col-span-1'>
                    <img className='w-[50%]' src={tajlogo} alt="" />

                 </div>
                   

                
                
         
                   
                   
                 
                    
                



            </div>

        </div>

    </div>
  )
}

export default Associates