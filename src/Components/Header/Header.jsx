import React, { useState } from 'react'
import tajlogo from '../../assets/tajlogo.jpg'
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Route, Routes} from 'react-router-dom';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';

import Companyprofile from '../Companyp/Companyprofile';
import Career from '../Career/Career';
import Jobdetail from '../Jobdetail/Jobdetail';
import Mission from '../Mission/Mission';
import Vision from '../Vision/Vision';
import Value from '../Value/Value';
import Team from '../Team/Team';
import Associates from '../Associates/Associates';
import Medicine from '../Medicine/Medicine';
import Activities from '../Activities/Activities';
import News from '../News/News';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Product1 from '../Product1/Product1';
import Gallery from '../Gallery/Gallery';
import Galleryevent from '../Galleryevent/Galleryevent';







const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
   
    
        <div className='  max-w-[1240px] py-6'>
            <div className='hidden md:block'> 
            <div className=' grid grid-cols-2 px-16  '>
                <div className='col-span-1'>
                <div>
                    <img className='w-20 ' src={tajlogo} alt="" />
                </div>
                   
              

                </div>


              <div className=' hidden md:block col-span-1'>
              <div>
                    <ul className='flex justify-evenly  '>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer font-medium text-lg p-2'> <Link to='/'>Home</Link></li>

                    <div className=' relative group'>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer font-medium text-lg p-2'>About </li>

                    <div className='absolute hidden group-hover:block '>
                        <div className='grid grid-cols- 1'>
                            <div className='col-span-1 '>

                                <div className='bg-fourth w-[240px] ml-[-50px]  shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px]'>
                                 <ul className='text-lg font-medium px-7 transition-all cursor-pointer'>
                                 <li className='hover:text-third py-3'><Link to='/Companyprofile'>Company Profile</Link></li>
                                 <li className='hover:text-third pb-3'><Link to='/Mission'>Mission</Link></li>
                                 <li className='hover:text-third pb-3'><Link to='/Vision'>Vision</Link></li>
                                 <li className='hover:text-third pb-3'><Link to='/Value'> Value</Link></li>
                                 <li className='hover:text-third pb-3'><Link to='/Team'>Team</Link></li>
                         
                                 </ul>

                            </div>
                               
                                
                               

                            </div>
                           

                        </div>

                    </div>

                    </div>
                   
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer  font-medium text-lg p-2 '><Link to='/Associates'>Associates</Link> </li>

                    
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer font-medium  text-lg p-2'><Link to='/Products'>Products</Link></li>
                     

                    
                   <div className='relative group'>
                   <li className='hover:text-[#0a3f6a] transition-all cursor-pointer font-medium text-lg p-2'>Activities</li>
                     <div className='absolute hidden group-hover:block '>
                      <div className='grid grid-cols-1 py-1'>
                        <div className='bg-fourth w-[240px] ml-[-50px]  shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px]'>
                        <ul className='text-lg font-medium px-7 transition-all cursor-pointer'>
                          <li className='hover:text-third py-3'><Link to='/Activities'>News & Activities</Link></li>
                          <li className='hover:text-third pb-3'><Link to='/Gallery'>Gallery</Link></li>
                        </ul>

                        </div>
                       

                      </div>
                      
                              

                     </div>
                   </div>
                    
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer font-medium text-lg p-2'><Link to='/Career'>Career</Link></li>
                    
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer font-medium text-lg p-2'> <Link to='/Contact'>Contact</Link>
                     </li> 
                    </ul>
                </div>

              </div>
               
               
            </div>
            </div>

            {/* responsive menu */}
            <div className='md:hidden block'>
            <div className='  flex justify-between px-10'>
                    
                    <img className='w-[20%] pb-10' src={tajlogo} alt="" />
                
                {
                    toggle ?

                    
                    
                    
                    

                    <AiOutlineCloseCircle  onClick={()=> setToggle(!toggle)} className='text-3xl md:hidden block text-black' />
                    

                    :


                    <RiMenu5Line onClick={()=> setToggle(!toggle)} className='text-3xl md:hidden block text-black' />

                }
               

                    </div>

                    <div className=' bg-secondary h-full w-full'>
                    <ul className={`md:hidden  block  text-center w-full h-full  fixed font-semibold text-3xl py-4  bg-secondary
          
          ${toggle ? 'left-[0%]' : 'left-[100%]'}
           `}>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Home</li>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>About </li>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'> Associates</li>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Products</li>

                   
           
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'><Link to='/Activities'>Activities</Link></li>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'><Link to='/Career'>Career</Link></li>
                    
                    <li  className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Contact</li>
                    </ul>

                    </div>
            </div>


        </div>
        

    

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Companyprofile' element={<Companyprofile/>}/>
        <Route path= '/Career' element={<Career/>}/>
        <Route path='/Jobdetail' element={<Jobdetail/>}/>
        <Route  path='/Mission' element={<Mission/>}/>
        <Route  path='/Vision' element={<Vision/>}/>
        <Route  path='/Value' element={<Value/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Associates' element={<Associates/>}/>
        <Route path='/Medicine' element={<Medicine/>}/>
        <Route path='/Activities' element={<Activities/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Product1' element={<Product1/>}/>
        <Route  path='/Gallery' element={<Gallery/>}/>
        <Route  path='/Galleryevent' element={<Galleryevent/>}/>
        





    </Routes>

 
    </>
  )
}

export default Header