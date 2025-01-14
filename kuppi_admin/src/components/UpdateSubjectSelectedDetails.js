import React,{useState, useContext} from 'react'
import { IoIosClose } from "react-icons/io";
import { AuthContext } from '../context/AuthContext'

const UpdateSubjectSelectedDetails = () => {
    const [subjectID, setSubjectID] = useState('')
    const [degreeID, setDegreeID] = useState('')
    const [subjectName, setSubjectName] = useState('')
    const [academicYear, setacademicYear] = useState('')
    const [error, setError] = useState(''); // State for error messages

    const { onClickSubjectTableSelect } = useContext(AuthContext)

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior

      // Validation to check if all fields are filled
      if ( subjectID === '' || degreeID === '' || subjectName === '' || academicYear === '') {
        setError('Please fill all the fields'); // Display an error message
        return;
      }

      setError(''); // Reset error message
      onClickSubjectTableSelect()
    };
  return (
    <div className='w-[500px] flex flex-col pb-6 pt-5 bg-white rounded-lg shadow-lg justify-center items-center'>
        <div className='w-full h-auto flex flex-row items-center justify-end px-8 relative'>
            <button className='text-[16pt] text-black'
             onClick={onClickSubjectTableSelect}
            >
                <IoIosClose />
            </button>
        </div>
        <div className='w-full h-auto px-10 py-7'>
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-3">
    
                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="Subjecct ID" className="font-medium">Subject ID</label>
                    <input
                      type="text"
                      value={subjectID}
                      onChange={(e) => { setSubjectID(e.target.value); }}
                      placeholder="Enter subject ID"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="Degree ID" className="font-medium">Degree ID</label>
                    <input
                      type="text"
                      value={degreeID}
                      onChange={(e) => { setDegreeID(e.target.value); }}
                      placeholder="Enter degree ID"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="Subject Name" className="font-medium">Subject Name</label>
                    <input
                      type="text"
                      value={subjectName}
                      onChange={(e) => { setSubjectName(e.target.value); }}
                      placeholder="Enter subject name"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="Academic Year" className="font-medium">Academic Year</label>
                    <input
                      type="text"
                      value={academicYear}
                      onChange={(e) => { setacademicYear(e.target.value); }}
                      placeholder="Enter academic year"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>


    
                   <div className="w-full h-auto flex flex-col gap-1">
                    <p className="w-full h-6 text-red-500 text-[12pt] font-semibold px-4">{error}</p>
                    <div className="w-full h-full flex flex-row justify-between items-center">
                      <button
                        type="submit"
                        className="bg-orange-500 border-2 border-orange-500 text-white px-10 py-[9.5px] text-[14pt] rounded-md hover:bg-orange-600 hover:border-orange-600"
                      >
                        Update
                      </button>
                      <button className="text-red-600 px-10 py-[9.5px] text-[14pt] rounded-md border-2 border-red-500 hover:text-white hover:bg-red-500">
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
            </div>
    </div>
  )
}

export default UpdateSubjectSelectedDetails