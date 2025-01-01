import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const StudentTable = ({data}) => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/student-details')
  }

  return (
    <div className="w-full h-full border-collapse border border-gray-200 bg-white rounded-md shadow-md">
          <div className="bg-blue-100">
            <div className='w-full h-auto flex flex-row py-2'>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Profile Image</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Student ID</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Student Name</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">University</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">No of Purchases</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Action</span>
            </div>
          </div>
          <div className='w-full h-full flex flex-col overflow-y-auto' style={{ maxHeight: '400px' }} >
            {data.map((data,index) => (
              <div key={index} className="w-full h-auto flex flex-row items-center justify-center hover:bg-gray-200 cursor-pointer py-3" onClick={handleClick}>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black flex items-center justify-center "><img src={data.profile} alt="profile" className='rounded-full object-contain'/></span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.id}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.name}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.university}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.purchases}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">
                  <button className="mr-2 text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
  )
}

export default StudentTable