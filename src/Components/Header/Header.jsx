import React, { useState } from 'react'
import tajlogo from '../../assets/tajlogo.png'
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Route, Routes} from 'react-router-dom';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Companyprofile from '../Companyp/Companyprofile';






const Header = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <>
   
    <div className='py-6'>
        <div className='max-w-[1240px]'>
            <div className='grid grid-cols-2 px-16 '>
                <div className='col-span-1'>
                <div>
                    <img className='w-[40%]' src={tajlogo} alt="" />
                </div>
                   
              

                </div>


              <div className=' hidden md:block col-span-1'>
              <div>
                    <ul className='flex justify-evenly font-semibold text-m'>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'> <Link to='/Home'>Home</Link></li>

                    <div className=' relative group'>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>About </li>

                    <div className='absolute hidden group-hover:block w-[500px] h-[100px] bg-secondary'>
                        <div className='grid grid-cols-2'>
                            <div className='col-span-1'>
                                <div className='flex items-center gap-2 hover:bg-primary transition-all cursor-pointer'>
                                <VscDebugBreakpointLog />
                                <h4 className='flex items-center gap-2 hover:bg-primary transition-all cursor-pointer'><Link to='/Companyprofile'>Company Profile</Link></h4>
                                </div>
                                <div className='flex items-center gap-2 hover:bg-primary transition-all cursor-pointer'>
                                <VscDebugBreakpointLog />
                                <h4>Mission</h4>
                                </div>
                                <div className='flex items-center gap-2 hover:bg-primary transition-all cursor-pointer'>
                                <VscDebugBreakpointLog />
                                <h4>Value</h4>
                               
                                </div>
                               

                            </div>
                            <div className='col-span-1'>
                                <div className='flex items-center gap-2  hover:bg-primary transition-all cursor-pointer'>
                                <VscDebugBreakpointLog />
                                <h4 className='flex items-center gap-2 hover:bg-primary transition-all cursor-pointer'>Vision</h4>
                                </div>
                                <div className='flex items-center gap-2 hover:bg-primary transition-all cursor-pointer'>
                                <VscDebugBreakpointLog />
                                <h4>Teams</h4>
                                </div>
                                

                            </div>

                        </div>

                    </div>

                    </div>
                   
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'> Associates</li>

                    <div className='relative group'>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Products</li>
                     <div className='absolute hidden group-hover:block'>
                        <div className='grid grid-cols-3  w-[500px] h-[300px] bg-secondary border-2 rounded-xl shadow-[rgba(0,_0,_0,_0.84)_0px_3px_10px]'>
                            <div className='col-span-1'>
                                <div className='text-center'>
                                <h4>Product A</h4>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer">Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>


                                </div>
                               
                            </div>
                            <div className='col-span-1'>
                                <div className='text-center'>
                                <h4>Product B</h4>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer">Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>
                                  <p  className="text-dark pb-1 hover:bg-primary transition-all cursor-pointer"> Name</p>


                                </div>
                               
                            </div>
                            

                        </div>
                       
                        
                     </div>

                    </div>
                   
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Activities</li>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Career</li>
                    
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'> <Link to='/Contact'>Contact</Link>
                     </li> 
                    </ul>
                </div>

              </div>
               
               
            </div>

            {/* responsive menu */}
            <div className='md:hidden block'>
            <div className='flex justify-between px-10'>
                    
                    <img className='w-[40%] pb-10' src={tajlogo} alt="" />
                
                {
                    toggle ?

                    
                    <RiMenu5Line onClick={()=> setToggle(!toggle)} className='text-3xl md:hidden block text-black' />
                    
                    :

                    <AiOutlineCloseCircle  onClick={()=> setToggle(!toggle)} className='text-3xl md:hidden block text-black' />
                    

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

                   
           
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Activities</li>
                    <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Career</li>
                    
                    <li  className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Contact</li>
                    </ul>

                    </div>
            </div>


        </div>
        

    </div>

    <Routes>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Companyprofile' element={<Companyprofile/>}/>
        





    </Routes>

 
    </>
  )
}

export default Header