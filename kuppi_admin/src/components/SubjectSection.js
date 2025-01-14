import React, {useState, useContext} from 'react'
import UpdateSubjectSelectedDetails from './UpdateSubjectSelectedDetails';
import SubjectSectionTable from './SubjectSectionTable';
import { AuthContext } from '../context/AuthContext';

const SubjectSection = () => {
  const [universityName, setUniversityName] = useState('');
  const [degreeName, setDegreeName] = useState('')
  const [degreeID, setDegreeID] = useState('')
  const [subjectName, setSubjectName] = useState('')
  const [universityYear, setUniversityYear] = useState('')
  const [error, setError] = useState(''); // State for error messages

  const { subjectTableSelect } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation to check if all fields are filled
    if (universityName === '' || degreeName === '' || degreeID === '' || subjectName === '' || universityYear === '') {
      setError('Please fill all the fields'); // Display an error message
      return;
    }

    setError(''); // Reset error message
  };

  const dataArray =[
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'},
    {id:'T0001', name:'Sarith', degree:'Softwear Engineering', year:'1'}
  ]
  return (
    <div className='w-full h-auto flex felx-row py-4'>
        <div className='w-1/2 h-auto flex flex-col px-5 gap-5 justify-center'>
            <div className='w-full h-auto flex flex-col gap-4 px-10 pb-10 border-b-2 border-b-black'>
                <div className="w-full h-auto flex flex-col gap-1">
                  <label htmlFor="University Name" className="font-medium">Degree Name</label>
                  <select
                    value={degreeName}
                    onChange={(e) => { setDegreeName(e.target.value); }}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option>Select degree name</option>
                    <option>Software Engineering</option>
                    <option>Network Engineering</option>
                    <option>Information Technoloy for Business</option>
                    <option>Computing</option>
                  </select>
                </div>

                <div className="w-full h-auto flex flex-col gap-1">
                  <label htmlFor="University Name" className="font-medium">University Name</label>
                  <select
                    value={universityName}
                    onChange={(e) => { setUniversityName(e.target.value); }}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option>Select university name</option>
                    <option>Colombo</option>
                    <option>Moratuwa</option>
                    <option>Kaleniya</option>
                    <option>Pereadeniya</option>
                  </select>
                </div>
            </div>

            <div className='w-full h-auto px-10 py-1'>
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-4">
    
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
                      placeholder="Enter subject ID"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="University Year" className="font-medium">University Year</label>
                    <input
                      type="text"
                      value={universityYear}
                      onChange={(e) => { setUniversityYear(e.target.value); }}
                      placeholder="Enter university year"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>


    
                   <div className="w-full h-auto flex flex-col gap-1">
                    <p className="w-full h-6 text-red-500 text-[12pt] font-semibold px-4">{error}</p>
                    <div className="w-full h-full flex flex-row justify-between items-center">
                      <button className="text-red-600 px-10 py-[9.5px] text-[14pt] rounded-md border-2 border-red-500 hover:text-white hover:bg-red-500">
                        clear
                      </button>
                      <button
                        type="submit"
                        className="bg-green-500 border-2 border-green-500 text-white px-10 py-[9.5px] text-[14pt] rounded-md hover:bg-green-600 hover:border-green-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>

        <div className='w-1/2 h-auto flex flex-col'>
        <SubjectSectionTable data={dataArray}/>
        </div>
        {subjectTableSelect && (
        <div className='w-full h-full flex flex-col px-5 py-3 inset-0 absolute'>
          <div className='w-full h-full flex flex-col bg-white bg-opacity-40 rounded-sm justify-center items-center'>
            <UpdateSubjectSelectedDetails />
          </div>
        </div>
      )}
    </div>
  )
}

export default SubjectSection