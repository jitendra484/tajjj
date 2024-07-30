import React from 'react'
import company2 from '../../assets/company2.jpg'
import companyp from '../../assets/companyp.jpg'
import tajlogo from '../../assets/tajlogo.jpg'

const Companyprofile = () => {
  return (
    <div>
        <div className='py-10 bg-[#F6F7F7]'>
            <div className='md:grid grid-cols-4 gap-20 md:px-20 px-10 xl:gap-40 '>
              
                <div className='col-span-2 pt-10'>
                  <div className='bg-primary text-white py-10 px-8'>
                    <h2 className='font-semibold text-2xl text-white pb-6'> ABOUT US</h2>
                    <p className=' '>Taj Pharmaceuticals has established itself as a top generic 
                      pharmaceutical company. With a product range that exceeds 4600 compositions across 
                      .
                    </p>
                    <p className=' '>Taj Pharmaceuticals has established itself as a top generic 
                      pharmaceutical company. With a product range that exceeds 4600 compositions across 
                      all therapeutic areas, it has successfully won the heart of consumers across the globe.
                    </p>
                   
                 
                  
                  </div>

                </div>

                <div className='col-span-2 py-10 md:px-8'>
                  <div>
                    <img className='w-[100%]' src={company2} alt="" />
                  </div>

                </div>

              

            </div>

            <div className=''>
              <div className='md:grid grid-cols-3 gap-16 py-20 md:px-20 px-10 items-center'>
                <div className='col-span-1'>
                  <div className=''>
                    <div className=''>
                      <img className=' border-2 border-gray-400' src={companyp} alt="" />
                     

                    </div>

                  </div>

                </div>

                
                  <div className='col-span-2'>
                    <div className='md:px-14'>
                      <h2 className='font-medium text-third text-xl py-10'>ABOUT TAJ NEPAL</h2>
                      <p>About Taj Pharma
                       Taj Pharmaceuticals has established itself as a top generic pharmaceutical company. With a product range that exceeds 4600 compositions across all therapeutic areas, it has successfully won the heart of consumers across the globe. <br />

                        The company is acclaimed as one of the top 10 pharmaceutical firms in India and the world’s leader in generics. Taj Pharma India is a market leader in therapeutic fields like Critaical care, transplantation, virology, and cancer. Taj Pharma’s generics and pharmaceuticals businesses work well together, and our knowledge of the bio-similar generic drugs enable us to create individualized therapeutic strategies and integrated healthcare solutions. The range of healthcare services and products offered by Taj Pharmaceutical includes genetic risk factor screening, disease diagnosis, disease prevention, treatment, and monitoring of the effectiveness of those treatments.</p>
                        <p>
                        “Quality Beyond Boundaries: Taj Pharmaceuticals Redefining Healthcare”

                        scientifically sound medications and services that enhance people’s health and general well-being worldwide, Taj Pharma scientists are gaining the public’s trust. Each day is a brand-new opportunity for Taj Pharma sales representatives, marketing teams, coworkers at Taj Pharma plants, and others throughout the business at all levels of responsibility.
                        </p>
                    </div>

                  </div>

                

             

              </div>

            </div>

        </div>
    </div>
  )
}

export default Companyprofile