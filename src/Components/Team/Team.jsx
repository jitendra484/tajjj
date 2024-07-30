import React from 'react'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'

const Team = () => {
  return (
    <div>
        <div className='mx-7 '>
            <div className='md:grid grid-cols-3 gap-5 xl:gap-20 py-10 px-8 '>
                <div className='col-span-1 py-6 px-5'>
                    <div className=''>
                        <img className='w-[75%] rounded-lg shadow-2xl' src={team1} alt="" />
                        <h3 className='font-medium text-xl py-2 px-10 text-textheadh3'>James legend</h3>
                        <p className='text-lg text-textpara'>Hr and Operation Manager</p>
                    </div>

                </div>

                <div className='col-span-1 py-6 px-5'>
                    <div>
                        <img className='w-[75%] rounded-lg shadow-2xl' src={team2} alt="" />
                        <h3 className='font-medium text-xl py-2 px-10 text-textheadh3'>James legend</h3>
                        <p className='text-lg text-textpara'>Hr and Operation Manager</p>
                    </div>

                </div>

                <div className='col-span-1 py-6 px-5'>
                    <div>
                        <img className='w-[75%] rounded-lg shadow-2xl' src={team3} alt="" />
                        <h3 className='font-medium text-xl py-2 px-10 text-textheadh3'>James legend</h3>
                        <p className='text-lg text-textpara'>Hr and Operation Manager</p>
                    </div>

                </div>

            </div>


            

        </div>
    </div>
  )
}

export default Team