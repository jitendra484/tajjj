import React from 'react'
import company2 from '../../assets/company2.jpg'
import companyp from '../../assets/companyp.jpg'
import tajlogo from '../../assets/tajlogo.png'

const Companyprofile = () => {
  return (
    <div>
        <div className='max-w-[1240px] bg-[#F6F7F7]'>
            <div className='grid grid-cols-3 gap-6 px-10 items-center'>
              
                <div className='col-span-1'>
                  <div className='bg-secondary py-8 px-8'>
                    <h2 className='font-semibold text-2xl text-white pb-6'> ABOUT US</h2>
                    <p className=' text-white'>Taj Pharmaceuticals has established itself as a top generic pharmaceutical company. With a product range that exceeds 4600 compositions across all therapeutic areas, it has successfully won the heart of consumers across the globe.
                    </p>
                 
                  
                  </div>

                </div>

                <div className='col-span-2 px-8'>
                  <div>
                    <img className='w-[80%]' src={company2} alt="" />
                  </div>

                </div>

              

            </div>

            <div className=''>
              <div className='grid grid-cols-3 py-20 px-10'>
                <div className='col-span-1'>
                  <div className=''>
                    <div className=''>
                      <img className=' border-2 border-gray-400' src={companyp} alt="" />
                      <h4 className='p-4 bg-slate-200'>Automatic Capsule Line</h4>

                    </div>

                  </div>

                </div>

                <div>
                  <div className='col-span-2'>
                    <div>
                      <div className='flex'>
                        <img src={tajlogo} alt="" />
                        <img src={tajlogo} alt="" />
                        
                        
                      </div>
                    </div>


                  </div>
                </div>

              </div>

            </div>

        </div>
    </div>
  )
}

export default Companyprofile