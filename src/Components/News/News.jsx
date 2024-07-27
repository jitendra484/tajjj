import React from 'react'
import news1 from '../../assets/news1.jpg'

const News = () => {
  return (
    <div className='max-w-[1240px]'>
      <div className='px-10 pt-16'>
      <h2 className='font-semibold text-3xl text-third'>Govt continues monitoring pharmacy sector:
                 Health Minister Basnet</h2>
            <p className='text-textpara py-4'>Published On:  September 25, 2023 05:43 PM NPT By: Republica </p>
      </div>

        <div className='md:grid grid-cols-2 gap-6 px-10 '>
            <div className='col-span-1'>
            
            <img className='w-[100%] h-[80%]  py-10' src={news1} alt="" />
            </div>
            <div className='col-span-1'>
            <p className='text-textpara py-10'>KATHMANDU, Sept 25: Minister for Health and Population Mohan Bahadur Basnet said the government has been monitoring anomalies in the pharmacy sector and taking action as required for reforming this sector. He also urged the concerned authorities to be serious about the sensitivity of the pharmacy sector and directed for reform efforts.

              The minister said so while speaking at a programme organized by the Nepal Pharmaceutical Association on the occasion of the World Pharmacists Day on Monday. "During the monitoring, we found that many pharmacies were not providing medicines, but pesticides. There have not been reforms in the pharmacy sector as expected," he said while urging pharmacists to upgrade the quality of the pharmacy service.

               "Some pharmacists are found to be serving medicines in the morning and evening. But most of the time, they assign non-pharmacists to work. Medicines are being distributed without a doctor's prescription. We all should be serious about removing anomalies in this sector," he said.

              Meanwhile, the pharmacists complained that non-pharmacists were running pharmacies. Similarly, they pointed out that there is a lack of permanent quotas of pharmacists, pharmacy education, monitoring and evaluation, and economic and technical assistance from the government for the upgradation of pharmacy practice.

              World Pharmacists Day is observed on September 25 every year. This year, the day is being celebrated with various programmes across Nepal. The slogan for the Day is 'Pharmacy strengthening health systems'. There are a total of 18,000 pharmacists in Nepal.</p>

            </div>
          
            
           


        </div>

    </div>
  )
}

export default News