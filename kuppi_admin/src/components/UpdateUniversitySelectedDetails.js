import React, {useState, useContext} from 'react'
import UploadIcon from '../assests/upload_blue_icon.png'
import { IoIosClose } from "react-icons/io";
import { AuthContext } from '../context/AuthContext';

const UpdateUniversitySelectedDetails = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State for uploaded file
    const [universityID, setUniversityID] = useState(''); 
    const [universityName, setUniversityName] = useState(''); 
    const [universityLocation, setUniversityLocation] = useState('');
    const [error, setError] = useState(''); // State for error messages
  
    const { onClickUniversityTableSelect } = useContext(AuthContext)
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      // Validation to check if all fields are filled
      if (universityID === '' || universityName === '' || universityLocation === '' ) {
        setError('Please fill all the fields'); // Display an error message
        return;
      }
  
      setError(''); // Reset error message
      onClickUniversityTableSelect()
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

  return (
    <div className='w-[500px] flex flex-col pb-6 pt-5 bg-white rounded-lg shadow-lg justify-center items-center'>
        <div className='w-full h-auto flex flex-row items-center justify-end px-8 relative'>
            <button className='text-[16pt] text-black'
             onClick={onClickUniversityTableSelect}
            >
                <IoIosClose />
            </button>
        </div>
        <div className='w-full h-auto flex flex-col gap-5'>
                    <div className='w-full h-auto flex flex-col gap-2 px-8'>
                        <div className='h-full h-auto flex flex-col gap-1'>
                            <label htmlFor="University Name" className="font-medium">University Logo</label>
                            <div className='w-full h-[180px] flex felx-col justify-center p-8 border-[3px] border-gray-400 rounded-lg'>
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
        
                    <div className='w-full h-auto px-8'>
                        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-1">

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
                            <p className="w-full h-6 text-red-500 text-[12pt] font-semibold px-1">{error}</p>
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
    </div>
  )
}

export default UpdateUniversitySelectedDetails