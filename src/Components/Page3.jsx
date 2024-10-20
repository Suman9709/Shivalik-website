import React from 'react';
import redbgcimg from '../../Images/redbgcimg.png';
import topamong from '../../Images/topamong.png';

const Page3 = () => {
    return (
        <div className='relative mt-8 flex w-full h-1/2'>
            {/* Left half - Image and Heading */}
            <div className='relative w-full flex items-center justify-center'>
                <img src={redbgcimg} alt="redbgcimg" className='absolute inset-0 w-full h-full object-cover' />

                <div className='w-full h-full flex items-center flex-row p-4'>
                    {/* Overlay content */}
                    <div className='relative z-10 flex flex-col items-center w-1/2'>
                        <img src={topamong} alt="top among" className='mb-4 ' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-[#ffc857] text-4xl font-bold text-center'>
                                ENGINEERING INSTITUTE IN UTTARAKHAND
                            </h1>
                            <p className='text-white text-lg mt-2'>
                                By Times Engineering 2021
                            </p>
                        </div>
                    </div>


                    <div className=' w-1/2 flex  justify-center h-full pt-10 items-start z-20'>
                        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-white'>
                            {/* Faculty-Student Ratio */}
                            <div className='flex items-center justify-start border-l-4 border-yellow-400'>
                                <div className='ml-4'>
                                    <h2 className='text-6xl font-bold'>1:15</h2>
                                    <p className='text-xl mt-2'>Faculty-Student Ratio</p>
                                </div>
                            </div>

                            {/* Successful Alumni */}
                            <div className='flex items-center justify-start border-l-4 border-yellow-400'>
                                <div className='ml-4'>
                                    <h2 className='text-6xl font-bold'>4000+</h2>
                                    <p className='text-xl mt-2'>Successful Alumni Worldwide</p>
                                </div>
                            </div>

                            {/* Companies Hiring */}
                            <div className='flex items-center justify-start border-l-4 border-yellow-400'>
                                <div className='ml-4'>
                                    <h2 className='text-6xl font-bold'>400+</h2>
                                    <p className='text-xl mt-2'>Companies Hiring Worldwide</p>
                                </div>
                            </div>

                            {/* Highest Package */}
                            <div className='flex items-center justify-start border-l-4 border-yellow-400'>
                                <div className='ml-4'>
                                    <h2 className='text-6xl font-bold'>42L</h2>
                                    <p className='text-xl mt-2'>Highest Package</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right half - Stats section */}

        </div>
    );
}

export default Page3;
