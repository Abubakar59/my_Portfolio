import React from 'react'

import { GiBrain } from "react-icons/gi";
import { PiSpeakerLowBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoShareSocialSharp } from "react-icons/io5";
import { SiApachecouchdb } from "react-icons/si";
const Service = () => {
  return (
    <div>
      <div className='bg-gray-400 h-70'>

        <div className='text-2xl justify-center items-center flex'>  Services</div>
        <div className=' flex justify-around p-4'>
          <div className='bg-blue-300 text-white rounded-full h-10 w-10 items-center flex justify-center'><GiBrain className='w-8 h-8' /></div>
          <div className='bg-blue-300 text-white rounded-full h-10 w-10 items-center flex justify-center'><PiSpeakerLowBold className='h-8 w-8' /></div>
          <div className='bg-blue-300 text-white rounded-full h-10 w-10 items-center flex justify-center'><FaLaptopCode className='h-8 w-8' /></div>
        </div>

        <div className='flex justify-around  mt-15'>
          <div className='bg-blue-300 text-white rounded-full h-10 w-10 items-center flex justify-center'><CgWebsite className='h-8 w-8' /></div>
          <div className='bg-blue-300 text-white rounded-full h-10 w-10 items-center flex justify-center'><IoShareSocialSharp className='h-8 w-8' /></div>
          <div className='bg-blue-300 text-white rounded-full h-10 w-10 items-center flex justify-center'><SiApachecouchdb className='h-8 w-8' /></div>
        </div>
      </div>
    </div>
  )
}

export default Service
