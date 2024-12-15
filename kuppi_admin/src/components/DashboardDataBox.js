import React from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";


const DashboardDataBox = ({icon, headData, type, precentage, days, position}) => {
  return (
    <div className='flex flex-row justify-center items-center rounded-lg gap-3 bg-white p-8 shadow-lg'>
        <img src={icon} alt="icon" className='w-28 h-auto rounded-full'/>
        <div className='flex flex-col gap-1'>
            <span className='text-[24pt] font-semibold'>{headData}</span>
            <span className='text-[14pt] font-normal'>{type}</span>
            <div className='flex flex-row items-center gap-2'>
                {position==='up'? (
                    <FaRegArrowAltCircleUp className='w-5 h-auto text-green-500 rounded-full bg-green-100'/>
                ):position==='down'? (
                    <FaRegArrowAltCircleDown className='w-5 h-auto text-red-500 rounded-full bg-red-100'/>
                ) : null
                }
                <span className='text-[10pt] text-gray-500'>{precentage} ({days} days)</span>
            </div>
        </div>
    </div>
  )
}

export default DashboardDataBox