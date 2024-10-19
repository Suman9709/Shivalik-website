import React from 'react'
import engineer from '../../Images/eng.png'
import pharmacy from '../../Images/Pharmacy.png'
import sips from '../../Images/sips.jpg'
import Cards from './Cards'
const Page2 = () => {
    return (
        <div className='flex flex-col mt-8 w-full h-full'>
            <div className='flex flex-col items-center justify-center text-black '>
                <h1 className='font-bold text-3xl'>OUR COLLEGES</h1>
                <div className='font-semibold text-xl flex flex-col items-center mt-4 '>
                <p>We are redefining higher education for professionals.</p> 
                <p>Develop your own point of view and discover your full potential in our unique learning environment.
                </p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center mt-4 gap-2'>


                <Cards name="SHIVALIK COLLEGE OF ENGINEERING"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    image={engineer} />

                <Cards name="SHIVALIK COLLEGE OF PHARMACY"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    image={pharmacy} />

                <Cards name="SHIVALIK COLLEGE OF PROFESSIONAL STUDIES"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    image={sips} />






            </div>
        </div>
    )
}

export default Page2