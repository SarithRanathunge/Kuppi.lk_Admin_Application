import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import AdminImage from "../assests/admin.jpg"

const HeaderBar = () => {
  return (
    <div className='w-full h-[90px] flex items-center justify-between px-5'>
      <div className='flex flex-col'>
        <span className='text-[16pt] font-medium'>Hello, Hirantha Perera</span>
        <span className='text-[12pt] text-gray-500'>Have a nice day</span>
      </div>
      <div className='flex flex-row items-center gap-5'>
        <div className='relative h-fit p-2 bg-blue-300 rounded-xl cursor-pointer'>
          <IoMdNotificationsOutline className='text-[20pt] text-blue-600' />
          <p className='w-6 h-6 flex flex-col items-center justify-center rounded-full text-[10pt] absolute bg-blue-500 text-white font-normal border-2 border-gray-200 top-[-10px] right-[-10px]'>21</p>
        </div>
        <div className='relative h-fit p-2 bg-blue-300 rounded-xl cursor-pointer'>
          <LuMessageSquareMore className='text-[20pt] text-blue-600' />
          <p className='w-6 h-6 flex flex-col items-center justify-center rounded-full text-[10pt] absolute bg-blue-500 text-white font-normal border-2 border-gray-200 top-[-10px] right-[-10px]'>53</p>
        </div>
        <div className='relative h-fit p-2 bg-red-200 rounded-xl mr-5 cursor-pointer'>
          <MdOutlineSettings className='text-[20pt] text-red-500' />
          <p className='w-6 h-6 flex flex-col items-center justify-center rounded-full text-[10pt] absolute bg-blue-500 text-white font-normal border-2 border-gray-200 top-[-10px] right-[-10px]'>19</p>
        </div>
        <div className='w-200px flex flex-row gap-2 pl-8 border-l-[3px] border-l-gray-400'>
          <img src={AdminImage} alt="Admin-Image" className='w-12 h-full rounded-full'/>
          <div className='flex flex-col cursor-pointer'>
            <span className='text-[14pt] font-medium'>Hirantha Perera</span>
            <span className='text-[10pt] font-thin'>Admin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBar