import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DashboardTable = ({ data }) => {
  return (
    
    <div className="w-full border-collapse border border-gray-200 bg-white rounded-md shadow-md">
      <div className="bg-blue-100">
        <div className='w-full h-auto flex flex-row py-2'>
          <span className="w-full text-center text-[14pt] font-normal text-gray-500">Tutor Name</span>
          <span className="w-full text-center text-[14pt] font-normal text-gray-500">Student ID</span>
          <span className="w-full text-center text-[14pt] font-normal text-gray-500">Kuppi Name</span>
          <span className="w-full text-center text-[14pt] font-normal text-gray-500">Date</span>
          <span className="w-full text-center text-[14pt] font-normal text-gray-500">Price(LKR)</span>
          <span className="w-full text-center text-[14pt] font-normal text-gray-500">Action</span>
        </div>
      </div>
      <div className='w-full h-full flex flex-col overflow-y-auto' style={{ maxHeight: '260px' }}>
        {data.map((data,index) => (
          <div key={index} className="w-full h-auto flex flex-row hover:bg-gray-200 cursor-pointer py-2">
            <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{index+1}</span>
            <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.studentid}</span>
            <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.kuppi}</span>
            <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.date}</span>
            <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.price}</span>
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
    
  );
};

export default DashboardTable;
