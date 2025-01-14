import React, {useState, useContext} from 'react'
import UploadIcon from '../assests/upload_blue_icon.png'
import UpdateUniversitySelectedDetails from './UpdateUniversitySelectedDetails';
import UniversitySectionTable from './UniversitySectionTable';
import { AuthContext } from '../context/AuthContext';

const UniversitySection = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State for uploaded file
  const [universityName, setUniversityName] = useState(''); 
  const [universityLocation, setUniversityLocation] = useState('');
  const [error, setError] = useState(''); // State for error messages

  const { universityTableSelect } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation to check if all fields are filled
    if (universityName === '' || universityLocation === '' ) {
      setError('Please fill all the fields'); // Display an error message
      return;
    }

    setError(''); // Reset error message
  };

   // Function to handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Update the selected file state
  };

  // Function to handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading:", selectedFile.name); // Log the file name
    }
  };

  const dataArray =[
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
    {id:'T0001', name:'Sarith', location:'Colombo'},
  ]
  return (
    <div className='w-full h-auto flex felx-row py-4'>
        <div className='w-1/2 h-auto flex flex-col px-5 gap-5'>
            <div className='w-full h-auto flex flex-col gap-2 px-10'>
                <div className='h-full h-auto flex flex-col gap-1'>
                    <label htmlFor="University Name" className="font-medium">University Logo</label>
                    <div className='w-full h-[220px] flex felx-col justify-center p-8 border-[3px] border-gray-400 rounded-lg'>
                        <img src={UploadIcon} alt="upload-icon" className=' object-contain' />
                    </div>
                </div>
    
                <div className="flex border-2 items-center rounded-lg border-gray-300">
                  {/* File input */}
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="fileInput"
                    className="flex-grow py-2 px-4  rounded-lg cursor-pointer"
                  >
                    {selectedFile ? selectedFile.name : "No file selected"}
                  </label>
                  <button
                    onClick={handleUpload}
                    className="py-2 px-4 border-l-2 border-gray-300 hover:bg-gray-200 rounded-r-lg"
                  >
                    Upload Image
                  </button>
                </div>
            </div>

            <div className='w-full h-auto px-10'>
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-4">
    
                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="University Name" className="font-medium">University Name</label>
                    <input
                      type="text"
                      value={universityName}
                      onChange={(e) => { setUniversityName(e.target.value); }}
                      placeholder="Enter university name"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
    
                  <div className="w-full h-auto flex flex-col gap-1">
                    <label htmlFor="University Location" className="font-medium">University Location</label>
                    <select
                      value={universityLocation}
                      onChange={(e) => { setUniversityLocation(e.target.value); }}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option>Select university location</option>
                      <option>Colombo</option>
                      <option>Moratuwa</option>
                      <option>Kaleniya</option>
                      <option>Pereadeniya</option>
                    </select>
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
                        Add
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>

        <div className='w-1/2 h-auto flex flex-col'>
        <UniversitySectionTable data={dataArray}/>
        </div>
        {universityTableSelect && (
        <div className='w-full h-full flex flex-col px-5 py-3 inset-0 absolute'>
          <div className='w-full h-full flex flex-col bg-white bg-opacity-40 rounded-sm justify-center items-center'>
            <UpdateUniversitySelectedDetails/>
          </div>
        </div>
      )}
    </div>
  )
}

export default UniversitySection