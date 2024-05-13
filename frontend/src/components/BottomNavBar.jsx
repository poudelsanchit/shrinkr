import React from 'react'
import { FiGithub } from "react-icons/fi";

const BottomNavBar = () => {
  return (
    <div className='bg-primarybackground text-white h-10 flex justify-center items-center bg-dotted-spacing-4 bg-dotted-[#191818] '>
        <div className='w-11/12 flex justify-evenly'>
            <a href="https://github.com/poudelsanchit/shrinkr" target='_blank'>
            <FiGithub  className='text-xl cursor-pointer'/>

            </a>
        <div className='font-Roboto'>© 2024 - Sanchit Poudel</div>
        </div>
    </div>
  )
}

export default BottomNavBar