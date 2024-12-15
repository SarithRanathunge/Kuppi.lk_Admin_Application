import React from 'react';
// import { FaArrowUp, FaArrowDown, FaEdit, FaTrash } from 'react-icons/fa';

const DashboardTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200 bg-white rounded-md shadow-md">
        <thead className="bg-blue-100">
          <tr className='w-full h-auto flex flex-row py-2'>
            <th className="w-full text-center text-[14pt] font-normal text-gray-500">Tutor Name</th>
            <th className="w-full text-center text-[14pt] font-normal text-gray-500">Student ID</th>
            <th className="w-full text-center text-[14pt] font-normal text-gray-500">Kuppi Name</th>
            <th className="w-full text-center text-[14pt] font-normal text-gray-500">Date</th>
            <th className="w-full text-center text-[14pt] font-normal text-gray-500">Price(LKR)</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b text-gray-800">{item.id}</td>
              <td className="px-4 py-2 border-b text-gray-800">{item.name}</td>
              <td className="px-4 py-2 border-b text-gray-800">
                {item.status === 'up' ? (
                  <FaArrowUp className="text-green-500 inline-block" />
                ) : (
                  <FaArrowDown className="text-red-500 inline-block" />
                )}
              </td>
              <td className="px-4 py-2 border-b text-center text-gray-800">
                <button className="mr-2 text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
