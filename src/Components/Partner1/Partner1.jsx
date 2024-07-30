import React from 'react'
import value from '../../assets/value.jpg'

const Partner1 = () => {
  return (
    <div className='mx-10'>
        <h2 className='font-semibold text-third text-3xl py-10 px-10'>Introduction</h2>
        <div className='md:grid grid-cols-5 md:px-10 py-10 gap-10 xl:gap-20 items-center '>
            <div className='col-span-2'>
                <div>
                    <img src={value} alt="" />
                </div>

            </div>
            <div className='col-span-3  md:px-10 py-10 '>
                <p className='md:px-10 xl:text-2xl'>With a vision of “nothing is more precious than our health”, Deurali-Janta was established to protect and improve this precious treasure of human beings. Since its commencement of operations in the year 1991, Deurali-Janta has grown rapidly to become one of the leading manufacturers of pharmaceutical products in Nepal. After 29 years of excellence & relentless dedication in the service of the nation & its people, Deurali-Janta has become a name synonymous with quality and is proud to have been able to establish itself as a pioneer in the production of quality drugs having 
                After 29 years of excellence & relentless dedication in the service of the nation & its people, Deurali-Janta has become a name synonymous with quality and is proud to have been able to establish itself as a pioneer in the production of quality drugs having 
                </p>

            </div>

        </div>



    </div>
  )
}

export default Partner1