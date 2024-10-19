import React from 'react'
import logo from '../../Images/logo-image.png'
import naac from '../../Images/nacc-logo.png'
import UpperLinks from '../Links/UpperLinks'
import LowerLinks from '../Links/LowerLinks'

const Navbar1 = () => {
  return (
    <div className='w-screen h-28 flex flex-row p-2 items-center z-50 fixed bg-white '>
      <div>
        <img className='w-48 h-16' src={logo} alt="" />
      </div>

      <div className='w-full flex flex-col px-4 '>
        <div className='w-full  flex items-center'>
          <div>
            <img className='w-28 h-10' src={naac} alt="" />
          </div>
          <div className='w-full'>
            <UpperLinks />
          </div>
          <div className='flex items-center'>
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-phone-alt"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: '#98012f', width: '24px', height: '24px' }}
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            <p style={{ color: '#98012f' }}>1234567890</p>
          </div>
        </div>
        <div className='h-[1px] bg-[#98012f] rounded-lg'></div>
        <div className='w-full flex items-center'>
          <LowerLinks />
        </div>
      </div>
    </div>
  )
}

export default Navbar1
