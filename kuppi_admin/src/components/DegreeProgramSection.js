import React, {useState, useContext} from 'react'
import UpdateDegreePorgramSelectedDetails from './UpdateDegreePorgramSelectedDetails';
import DegreeProgramSectionTable from './DegreeProgramSectionTable';
import { AuthContext } from '../context/AuthContext';

const DegreeProgramSection = () => {
  const [universityName, setUniversityName] = useState('');
  const [universityID, setUniversityID] = useState('')
  const [degreeName, setDegreeName] = useState('')
  const [facultyName, setFacultyName] = useState('')
  const [error, setError] = useState(''); // State for error messages

  const { degreeProgramTableSelect } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation to check if all fields are filled
    if (universityName === '' || universityID === '' || degreeName === '' || facultyName === '') {
      setError('Please fill all the fields'); // Display an error message
      return;
    }

    setError(''); // Reset error message
  };

  const dataArray =[
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
    {id:'T0001', name:'Sarith', university:'Colombo', faculty:'Engineering'},
  ]
  return (
    <div className='w-full h-auto flex felx-row py-4'>
        <div className='w-1/2 h-auto flex flex-col px-5 gap-5 justify-center'>
            <div className='w-full h-auto px-10 pb-14 border-b-2 border-b-black'>
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
            <div className='w-full h-auto px-10 py-7'>
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-6">
    
                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="University ID" className="font-medium">University ID</label>
                    <input
                      type="text"
                      value={universityID}
                      onChange={(e) => { setUniversityID(e.target.value); }}
                      placeholder="Enter university ID"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="Degree Name" className="font-medium">Degree Name</label>
                    <input
                      type="text"
                      value={degreeName}
                      onChange={(e) => { setDegreeName(e.target.value); }}
                      placeholder="Enter degree ID"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="Faculty Name" className="font-medium">Faculty Name</label>
                    <input
                      type="text"
                      value={facultyName}
                      onChange={(e) => { setFacultyName(e.target.value); }}
                      placeholder="Enter faculty name"
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
        <DegreeProgramSectionTable data={dataArray}/>
        </div>
        {degreeProgramTableSelect && (
        <div className='w-full h-full flex flex-col px-5 py-3 inset-0 absolute'>
          <div className='w-full h-full flex flex-col bg-white bg-opacity-40 rounded-sm justify-center items-center'>
            <UpdateDegreePorgramSelectedDetails />
          </div>
        </div>
      )}
    </div>
  )
}

export default DegreeProgramSection