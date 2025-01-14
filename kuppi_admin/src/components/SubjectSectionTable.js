import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const SubjectSectionTable = ({data}) => {
  const { onClickSubjectTableSelect } = useContext(AuthContext)

  const handleClick = () => {
    onClickSubjectTableSelect()
  }

  return (
    <div className="w-full h-auto border-collapse border border-gray-200 bg-white rounded-md shadow-md">
        <div className="bg-blue-100">
            <div className='w-full h-auto flex flex-row py-2'>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Subject ID</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Subject Name</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Degree</span>
              <span className="w-full text-center text-[14pt] font-normal text-gray-500">Year</span>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col overflow-y-auto' style={{ maxHeight: '520px' }} >
            {data.map((data,index) => (
              <div key={index} className="w-full h-auto flex flex-row items-center justify-center hover:bg-gray-200 cursor-pointer py-3" onClick={handleClick}>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.id}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.name}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.degree}</span>
                <span className="w-full h-auto text-center text-[12pt] font-normal text-black">{data.year}</span>
              </div>
            ))}
        </div>
    </div>
  )
}

export default SubjectSectionTable