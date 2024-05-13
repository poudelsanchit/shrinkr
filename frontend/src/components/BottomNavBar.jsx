import React from 'react'
import { FiGithub } from "react-icons/fi";

const BottomNavBar = () => {
  return (
    <div className='bg-primarybackground text-white h-10 flex justify-center items-center'>
        <div className='w-11/12 flex justify-evenly'>
            <a href="" target='_blank'>
            <FiGithub  className='text-xl cursor-pointer'/>

            </a>
        <div>© 2024 - Sanchit Poudel</div>
        </div>
    </div>
  )
}

export default BottomNavBar