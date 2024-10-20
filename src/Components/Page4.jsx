import React from 'react';
import shivalik_college from '../../Images/shivalik_college.png';

const Page4 = () => {
  return (
    <div className='flex w-full h-half'>
      <div
        className='w-full flex justify-end items-center text-white bg-cover bg-center p-16'
        style={{ backgroundImage: `url(${shivalik_college})` }}
      >
        <div className='w-[70%]  p-6'>
          <h1 className='font-bold text-5xl mb-4 text-start'>SHIVALIK COLLEGE DEHRADUN</h1>
          <h3 className='font-bold text-2xl mb-4 text-start'>A Unique learning environment</h3>
          <p className='leading-relaxed text-[1rem]'>
            The Shivalik College, established in 2008, is a non-profit organization with firm Indian roots but with a global outlook and reach. Over the years it has built up an enviable reputation of being counted among the Best Colleges in Dehradun. We at Shivalik, aim to take it to the next level and mobilize world-class education and generate resources for providing and supporting quality education for all. The organization has an intensive, yet enabling academic environment with the mission to prepare students holistically with innovative and analytical minds and creativity to generate new thinking, discover fresh horizons, and enable them to achieve their dreams and goals as global citizens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
