import React from 'react'
import slideimg from '../../Images/slide_img-1.png'
import badge_1 from '../../Images/badge-1.png';
import degree from '../../Images/degree.png'
import video_2 from '../../Images/video-2.png'

const Page5 = () => {
  return (
    <div className=" flex flex-col mt-8 h-screen">
        <div className='flex justify-center items-center bg-cover bg-center h-[70vh]' 
            style={{ backgroundImage: `url(${slideimg})` }}>
            
            <div className="absolute p-8 flex justify-center items-center">
                <ul className="grid grid-cols-3 gap-4 items-center">
                    <li className="flex flex-row gap-2 justify-start items-start">
                      <div>
                        <img src={badge_1} alt=""  />
                      </div>
                      <div>
                        <h1 className="text-5xl font-bold text-white flex ">1 <span className='text-xl'>st</span></h1>
                        <p className="text-md text-white">Among Top 50 Private Engineering Institutes on Placements by Times Engineering Survey 2020</p>
                      </div>
                    </li>

                    <li className="flex flex-row gap-2 justify-center items-start">
                      <div>
                        <img src={badge_1} alt=""/>
                      </div>
                      <div>
                        <h1 className="text-5xl font-bold text-white flex">1 <span className='text-xl'>st</span></h1>
                        <p className="text-md text-white">To be awarded with best industry interface award b CMAI, AICTE AND UTU</p>
                      </div>
                    </li>

                    <li className="flex flex-row gap-2 justify-center items-start">
                      <div>
                        <img src={degree} alt=""  />
                      </div>
                      <div>
                        <h1 className="text-5xl font-bold text-white flex">1 <span className='text-xl'>st</span></h1>
                        <p className="text-md text-white">First College in India to dedicate a Fully Modern and well Stocked Learning Resource Center to the former President of India.</p>
                      </div>
                    </li>

                    <li className="flex flex-row gap-2 justify-center items-start">
                      <div>
                        <img src={video_2} alt=""  />
                      </div>
                      <div>
                        <h1 className="text-5xl text-white font-bold flex">2 <span className='text-xl'>nd</span></h1>
                        <p className="text-md text-white">Among Private Engineering College ALL India by the week, Hansa Research Survey 2020</p>
                      </div>
                    </li>

                    <li className="flex flex-row gap-2 justify-center items-start">
                      <div>
                        <img src={badge_1} alt=""  />
                      </div>
                      <div>
                        <h1 className="text-5xl text-white font-bold flex ">3 <span className='text-xl'>rd</span></h1>
                        <p className="text-md text-white">Among india's Top 150 engineering Colleges for Academic Excellence by Outlook 2019</p>
                      </div>
                    </li>

                    <li className="flex flex-row gap-2 justify-center items-start">
                      <div>
                        <img src={badge_1} alt="" />
                      </div>
                      <div>
                        <h1 className="text-5xl text-white font-bold flex">16 <span className='text-xl'>th</span></h1>
                        <p className="text-md text-white">Among Best Private Institute in North India by Times Engineering, The Times of India 2021</p>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Page5
