import React, {useContext} from 'react'
import { IoIosClose } from "react-icons/io";
import { AuthContext } from '../context/AuthContext';


const WithdrawalDetailSection = () => {
  const { profile, name, total, withdrawal, service, reserved, balance, onClick} =useContext(AuthContext);
  return (
    <div className='flex flex-col gap-12 p-8 bg-white rounded-lg shadow-lg justify-center items-center'>
        <div className='w-[750px] h-auto flex flex-row items-start justify-between px-8 relative'>
            <div className='flex flex-row gap-5 items-center'>
                <img src={profile} alt="profile" className='w-[80px] object-contain rounded-full border-2 border-black'/>
                <div className='flex flex-col'>
                    <span className='text-[24pt] font-bold'>{name}</span>
                    <span className='text-[10pt] text-gray-400 pl-1'>alexperera123@gmail.com</span>
                </div>
            </div>
            
            <button className='text-[16pt] text-black'
             onClick={onClick}
            >
                <IoIosClose />
            </button>
        </div>

        <div className='flex flex-row gap-48'>
            <div className='flex flex-col gap-2'>
                <span className='text-[16pt] text-blue-500 font-bold'>Total Earnings</span>
                <span className='text-[14pt] text-black  pl-5'>WithDraw Amount</span>
                <span className='text-[14pt] text-black pl-5'>Service Charge</span>
                <span className='text-[14pt] text-blackd pl-5'>Reserved Amount</span>
                <span className='text-[14pt] text-black pl-5'>Account Balance</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-[16pt] text-blue-500 font-bold text-right'>Rs.{total}</span>
                <span className='text-[14pt] text-black text-right'>Rs.{withdrawal}</span>
                <span className='text-[14pt] text-black text-right'>Rs.{service}</span>
                <span className='text-[14pt] text-blackd text-right'>Rs.{reserved}</span>
                <span className='text-[14pt] text-black text-right'>Rs.{balance}</span>
            </div>
        </div>

        <div className='w-[750px] h-auto flex felx-row justify-between px-12'>
            <button className='text-[14pt] border-2 bg-white border-red-500 text-red-500 rounded-lg px-8 py-2 hover:bg-red-500 hover:text-white'
            onClick={onClick}
            >
                Hold
            </button>
            <button className='text-[14pt] border-2 bg-blue-500 border-blue-500 text-white rounded-lg px-8 py-2 hover:bg-white hover:text-blue-500'
            onClick={onClick}
            >
                Accept
            </button>
        </div>
    </div>
  )
}

export default WithdrawalDetailSection