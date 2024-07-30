import React from 'react'
import product1 from '../../assets/product1.png'
import { MdArrowDropUp } from "react-icons/md";

import { MdOutlineArrowDropDown } from "react-icons/md";


import { useState } from 'react';

const Product1 = () => {
  const [Product1Open, setProduct1Open] = useState(false);
  return (
    <div className='md:mx-20 mx-10 py-10'>
      <h2 className='font-semibold text-third text-2xl px-5'>Product1</h2>
      <div className='md:grid grid-cols-2 gap-3'>
        <div className='col-span-1'>
          <div className='px-5'>
            <img src={product1} alt="" />
          </div>

        </div>
        <div className='col-span-1 '>
          <div className='py-5'>
            <h3 className='font-medium text-textheadh3 text-xl '>FAQ</h3>
          </div>

          <div>

        
          
            <div onClick={()=> setProduct1Open (!Product1Open)} className='flex justify-between  bg-fourth'>
              
              <h3 className='p-3'>GENERIC NAME OF THE MEDICINAL PRODUCT:</h3>
              {Product1Open ?  <MdArrowDropUp className='font-medium text-3xl' />: <span><MdOutlineArrowDropDown className='font-medium text-3xl' /></span> }
             

            </div>
            <div className={` bg-fourth grid overflow-hidden transition-all ease-in-out text-textheadh3 text-lg ${
              Product1Open ? 'grid-row-[1fr] opacity-100' : 'grid-row-[0fr] opacity-0'
            }`}>
              <div className='overflow-hidden'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci accusantium minima magnam reprehenderit architecto optio dolor vero
              </div>
            </div>

        


          <div className=''>
            <div onClick={()=> setProduct1Open (!Product1Open)} className='flex justify-between  bg-fourth'>
              
              <h3 className='p-3'>QUALITATIVE AND QUANTITATIVE COMPOSITION:</h3>
              {Product1Open ? <span><MdArrowDropUp className='font-medium text-3xl' /></span> : <span><MdOutlineArrowDropDown className='font-medium text-3xl' /></span> }
             

            </div>
            <div className={` bg-fourth grid overflow-hidden transition-all ease-in-out text-textheadh3 text-lg ${
              Product1Open ? 'grid-row-[1fr] opacity-100' : 'grid-row-[0fr] opacity-0'
            }`}>
              <div className='overflow-hidden'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci accusantium minima magnam reprehenderit architecto optio dolor vero 
              </div>
            </div>

          </div>
          </div>


          


        </div>

      </div>

      <div className='md:grid grid-cols-1'> 
        <div className='col-span-1'>
          <h2 className='text-third font-medium text-xl'>Darunavir Ethanolate & Ritonavir Tablets (800mg+100mg) Technical Specification:</h2>
          <div className='py-10'>
           <table >
         
            <tr>
              <td className='font-medium'>Product Name</td>
              <td  className='md:pl-20 pl-10'>Darunavir Ethanolate & Ritonavir Tablets</td>
            </tr>
            <tr>
              <td className='font-medium'>Brand Name:	</td>
              <td className='md:pl-20 pl-10'>Generic</td>
            </tr>
            <tr>
              <td className='font-medium'>Strength:</td>
              <td className='md:pl-20 pl-10'>	(400mg+50mg), (600mg+100mg), (800mg+100mg)</td>
            </tr>
            <tr>
              <td className='font-medium'>Dosage Form:	</td>
              <td className='md:pl-20 pl-10'>Tablets (film-coated)</td>
            </tr>
            <tr>
              <td className='font-medium'>Route of Administration:</td>
              <td className='md:pl-20 pl-10'>	Via Oral Route</td>
            </tr>
            <tr>
              <td className='font-medium'>Packing:	</td>
              <td className='md:pl-20 pl-10'>30 Tablets in a bottle</td>
            </tr>
            <tr>
              <td className='font-medium'>Pack Insert/Leaflet:	</td>
              <td className='md:pl-20 pl-10'>PIL (Patient Information Leaflet), SmPC (Summary Product Characteristics)</td>
            </tr>
            <tr>
              <td className='font-medium'>Regulatory Documents:	Dossier</td>
              <td className='md:pl-20 pl-10'>COA, MOA, COPP, FSC, Stability Studies, GMP, CTD </td>
            </tr>
            <tr>
              <td className='font-medium'>Therapeutic use:	</td>
              <td className='md:pl-20 pl-10'>Protease Inhibitors, Antiviral </td>
            </tr>
            <tr>
              <td className='font-medium'>Storage:	</td>
              <td className='md:pl-20 pl-10'>Store at a temperature not exceeding 30℃. Store in a cool & dry place. Protect from Light & moisture. </td>
            </tr>

            






           </table>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Product1