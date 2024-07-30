import React from 'react'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.jpeg'
import product6 from '../../assets/product6.jpeg'
import product5 from '../../assets/product5.jpeg'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='mx-10'>
        <h2 className='font-semibold text-third text-2xl text-center py-6'>Our All Products</h2>
        <div className='md:grid grid-cols-5 px-10 gap-5 md:gap-10' >
            <div className='col-span-1 pt-10'>
                <Link to='/Product1'>  
                <div className='  bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product1} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product1</h3>
                </div>
                </Link>

            </div>

            <div className='col-span-1 pt-10'>
            <Link to='/Product1'> 
                <div className=' bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product2} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product2</h3>
                </div>
                </Link>

            </div>

            <div className='col-span-1 pt-10'>
            <Link to='/Product1'> 
                <div className='bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product3} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product3</h3>
                </div>
                </Link>

            </div>
            <div className='col-span-1 pt-10'>
            <Link to='/Product1'> 
                <div className='bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product5} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product5</h3>
                </div>
                </Link>

            </div>

            <div className='col-span-1 pt-10'>
            <Link to='/Product1'> 
                <div className='bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md  ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product6} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product6</h3>
                </div>
                </Link>

            </div>

        </div>

        <div className='md:grid grid-cols-5 px-10 gap-5' >
            <div className='col-span-1 pt-10'>
                <Link to='/Product1'>  
                <div className='  bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product1} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product1</h3>
                </div>
                </Link>

            </div>

            <div className='col-span-1 pt-10'>
                <div className=' bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product2} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product2</h3>
                </div>

            </div>

            <div className='col-span-1 pt-10'>
                <div className='bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product3} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product3</h3>
                </div>

            </div>
            <div className='col-span-1 pt-10'>
                <div className='bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product5} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product5</h3>
                </div>

            </div>

            <div className='col-span-1 pt-10'>
                <div className='bg-fourth transition-all cursor-pointer p-5 py-5 shadow-[rgba(0,_0,_0,_0.34)_0px_3px_10px] rounded-t-md  ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='w-48 h-52' src={product6} alt="" />
                    <h3 className='text-textheadh3 font-medium text-center text-2xl'>Product6</h3>
                </div>

            </div>

        </div>

       


        


     

     

    </div>
  )
}

export default Products