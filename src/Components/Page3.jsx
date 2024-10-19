import React from 'react'
import redbgcimg from '../../Images/redbgcimg.png'
import topamong from '../../Images/topamong.png'

const Page3 = () => {
    return (
        <div className='mt-8'>
            <div className='relative flex '>
                <img src={redbgcimg} alt="redbgcimg" className='absolute left-0' />
                <img src={topamong} alt="" className='relative z-10 left-8 top-1/2' />
                <h1>ENGINEERING INSTITUTE OF TECHNOLOGY</h1>
            </div>
        </div>
    )
}

export default Page3