import React from 'react'
import mjobdetails from'../../assets/mjobdetails.jpg'
import { GoDotFill } from "react-icons/go";
import Button from '../../Layout/Button';
import { useState } from 'react';

import ReCAPTCHA from "react-google-recaptcha";

const Jobdetail = () => {
  const onChange=()=> {

  };
    const [file, setFile] = useState(null);
    function handleUpload(){
        if (!file){
            console.log("no file selected");
            return;
        } 
        const fd = new FormData();
        fd.append('file', file);
    }
  return (
    <div>
        <div className=' py-14'>
            <div className='md:grid grid-cols-2 gap-20 xl:gap-56 md:mx-20 mx-10 '>
                <div className='col-span-1'>
                    <div>
                    <h3 className='text-third font-semibold pb-6 text-xl'>Career</h3>
                    <h3 className='font-medium text-xl text-textheadh3'>Marketing Assistance</h3>

                    <div className='py-5'>
                        <table >
                        <tr className='pb-5'>
              <td className='font-medium text-textpara text-xl'>Job Category :</td>
              <td  className='pl-14 text-xl'>          
              Sales & Marketing</td>
            </tr>
            <tr  className='p-10'>
              <td className='font-medium text-textpara text-xl'>Number of vacancy :
              	</td>
              <td className='pl-14 text-xl'>2</td>
            </tr>
            <tr>
              <td className='font-medium text-textpara text-xl '>Employment Type :
              </td>
              <td className='pl-14 text-xl'>	Full Time</td>
            </tr>
            <tr>
              <td className='font-medium text-textpara text-xl'>Job Location:	</td>
              <td className='pl-14 text-xl'>Kathmandu</td>
            </tr>
            <tr>
              <td className='font-medium text-textpara text-xl'>Salary:</td>
              <td className='pl-14 text-xl'>	Rs 50,000+</td>
            </tr>
            

  


 


                        </table>
                    </div>
                    
                    

                    
                    <div className='flex gap-24 pb-5'>
                    <p className='text-textpara text-xl'>Remaing Days:
                   
                   </p> 
                   <Button title='Close'/>

                    </div>
                    
                    
                    






                    </div>

                    <div className='py-14'>
                        <h3 className='text-2xl text-textheadh3 font-medium'>  Qualification & Experience</h3>

                        <div>
                            <table>

                            <tr>
              <td className='font-medium text-textpara text-xl'>Education:	</td>
              <td className='pl-14 text-xl'>Bachelor in related field</td>
            </tr>
            <tr>
              <td className='font-medium text-textpara text-xl'>Experiences:</td>
              <td className='pl-14 text-xl'>1 years</td>
            </tr>
                            </table>
                  
                   




                        </div>

                  

                    </div>

                </div>

                <div className='col-span-1 '>
                  <div className='mx-20 xl:mx-64'>
                    <img className='rounded-md ' src={mjobdetails} alt="" />
                  </div>

                </div>
               

            </div>

            <div className='md:grid grid-cols-2 mx-5 md:mx-10 gap-20 xl:gap-40 py-12' >
                
                 <div className='col-span-1'>
                  
                    <div className='md:px-10'>
                    <div className='  py-3'>
                            <h3 className='font-medium text-xl text-textheadh3'>
                            Responsibilities:</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Develop and execute marketing strategies to promote our web app to potential clients.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Conduct market research to identify potential customers and their needs.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Attend industry events and conferences to network and promote our products.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>






                    </div>

                <div className='md:px-10'>
                    <div className='  py-3'>
                            <h3 className='font-medium text-xl text-textheadh3'>
                            Requirements:</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Develop and execute marketing strategies to promote our web app to potential clients.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Conduct market research to identify potential customers and their needs.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Attend industry events and conferences to network and promote our products.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>

                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>

                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>






                    </div>


                    <div className='md:px-10'>
                    <div className='  py-3'>
                            <h3 className='font-medium text-xl text-textheadh3'>
                            If working in office, candidate must have:</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Develop and execute marketing strategies to promote our web app to potential clients.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Conduct market research to identify potential customers and their needs.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Attend industry events and conferences to network and promote our products.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>

                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>

                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                        <GoDotFill className='text-textpara' /> <p className='text-textpara'>Suggest to manage and update our website and social media channels to ensure they are up-to-date and engaging.</p>
                        </div>






                    </div>


                   

                 </div>
                 <div className='col-span-1 md:mx-20 '>
                

                <div className='py-6'>
                <h2 className='text-third font-semibold text-3xl  py-5'>Job Application Form</h2>
                    <h3 className='text-textheadh3 font-medium text-2xl'>If you are interested , You can apply now.</h3>
                </div>
                
                
                <div>
                <div className='pb-10'>
                <label className='font-medium'>Full Name:</label>
                 <div className='mt-2'>
                
                
                <input className='p-3 border-2 rounded-lg w-[100%] ' type="text" placeholder='Your name' required />
                </div>
                
                </div>
                
                </div>
                
                
                <div className='pb-10'>
                <label className='font-medium'>Email:</label>
                <div className='mt-2'>
                
                
                <input className='p-3 border-2 rounded-lg w-[100%] ' type="mail" placeholder='Your Email' required />
                </div>
                
                </div>
                
                <div className='pb-10'>
                <label className='font-medium'>Phone: </label>
                <div className='mt-2'>
                
                
                <input className='p-3 border-2 rounded-lg w-[100%] ' type="tel" placeholder='Your Phone' required />
                </div>
                
                </div>
                <div className='py-5 md:flex items-center gap-10 '>

                 <div className='py-5'>
                <ReCAPTCHA
                sitekey="6LcS1BYqAAAAAIbStaWCzXoT5ZpGK8xtozaA_-Qx"
                onChange={onChange}
                />
                </div>



                <Button title=" Submit"/>

                </div>

               


                <div className='pb-10'>
                <h3 className='pb-4'>Upload your resume </h3>
                
                <input onChange={(e)=> {setFile(e.target.files[0])}} type="file" />
                
                <button onClick={handleUpload} className='bg-third p-2 px-3 text-white rounded-lg mt-5' >Upload</button>
                
                
                
                </div>
                
                
                                   
                
                </div>
                

            </div>

         

          

        </div>
    </div>
  )
}

export default Jobdetail