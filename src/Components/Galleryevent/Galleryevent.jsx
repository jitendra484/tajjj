import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'



const Galleryevent = () => {
  return (
    <div className='mx-10'>
        <h2 className=' px-10 pt-10 font-semibold text-3xl text-third'>Event 1</h2>
        <p className='text-textpara font-medium text-lg md:px-10 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi dignissimos dolorum quod illum. Aliquid rem ut praesentium quod, optio animi delectus accusamus, distinctio neque eos fuga debitis consequatur tenetur</p>
        <div className='md:grid grid-cols-4 px-10 py-10'>
            
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img1} alt="" />
                </div>

            </div>
          
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img2} alt="" />
                    
                </div>

            </div>
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img3} alt="" />
                </div>

            </div>
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img5} alt="" />
                </div>

            </div>

        </div>
        <div className='md:grid grid-cols-4 px-10 pb-10'>
            
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img6} alt="" />
                </div>

            </div>
          
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img2} alt="" />
                    
                </div>

            </div>
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img3} alt="" />
                </div>

            </div>
            <div className='col-span-1 py-10'>
                <div className=''>
                    <img className='w-64 h-80 transition-all cursor-pointer' src={img5} alt="" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Galleryevent