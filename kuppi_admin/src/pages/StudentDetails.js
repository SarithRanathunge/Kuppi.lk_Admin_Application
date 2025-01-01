import React, {useState} from 'react'
import ProfileImage from '../assests/admin.jpg'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin2Fill } from "react-icons/ri"

const StudentDetails = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [CurrentYear, setCurrentYear] = useState('');
  const [startYear, setStartYear] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !university || !degree || !startYear || !startYear) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    navigate('/student');
  };
  return (
    <div className='w-full h-auto p-4'>
        <div className='w-full h-auto flex flex-col p-3 py-5 bg-white rounded-lg gap-8'>
            <div className='w-full h-auto flex flex-row items-center justify-between px-8'>
                <div className='flex flex-row gap-5 items-center justify-center'>
                    <img src={ProfileImage} alt="profile image" className='w-[80px] object-contain rounded-full border-2 border-black'/>
                    <div className='flex flex-col'>
                        <span className='text-[24pt] font-bold text-center'>Alex Perera</span>
                        <span className='text-[10pt] text-gray-400 text-center'>alexperera123@gmail.com</span>
                    </div>
                </div>
                
                <button className='text-[12pt] text-white bg-blue-500 rounded-lg px-4 py-3 hover:bg-blue-600' onClick={()=>{ navigate('/student-purchases')}}>
                    See All Purchases
                </button>
            </div>

            <div className='w-full h-auto mt-4 px-6'>
                <form onSubmit={handleSubmit} className='flex flex-row gap-20 bg-white'>
                  
                  {/* Left side: Personal information inputs */}
                  <div className='w-1/2 h-auto space-y-7'>
                    
                    {/* Full name input */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="Full Name" className="font-medium">Full Name</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value); }}
                        placeholder="Enter Your Full Name"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
          
                    {/* Email input */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="Email" className="font-medium">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }}
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
          
                    {/* Phone number input */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="Phone Number" className="font-medium">Phone Number</label>
                      <div className="flex items-center">
                        <span className="mr-2 text-gray-500">+94</span>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => { setPhoneNumber(e.target.value); }}
                          placeholder="Enter your Phone Number"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
          
                    {/* Password input */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="Password" className="font-medium">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                        placeholder="Enter Your password"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>

                  </div>
          
                  {/* Right side: Academic information inputs */}
                  <div className='w-1/2 h-auto space-y-7'>
                    
                    {/* University select */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="University" className="font-medium">University</label>
                      <select
                        value={university}
                        onChange={(e) => { setUniversity(e.target.value); }}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      >
                        <option>Select your university</option>
                        <option>NIBM</option>
                      </select>
                    </div>
          
                    {/* Degree input */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="Faculty" className="font-medium">Degree</label>
                      <input
                        type="text"
                        value={degree}
                        onChange={(e) => { setDegree(e.target.value); }}
                        placeholder="Enter Your Degree"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
          
                    {/* Current academic year select */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="Current Academic Year" className="font-medium">Current Academic Year</label>
                      <select
                        value={CurrentYear}
                        onChange={(e) => { setCurrentYear(e.target.value); }}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      >
                        <option>Select your academic year</option>
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                      </select>
                    </div>
          
                    {/* University start year input */}
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <label htmlFor="University Start Year" className="font-medium">University Start Year</label>
                      <input
                        type="date"
                        value={startYear}
                        onChange={(e) => { setStartYear(e.target.value); }}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    {/* Error message and submit button */}
                    <div className="w-auto h-auto flex flex-col">
                      {/* Display error message if any */}
                      <p className="text-red-500 text-[12pt] font-semibold px-2">{error}</p>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="w-full flex flex-row items-center justify-center gap-4 bg-white border-2 border-red-500 text-red-500 text-[14pt] px-4 py-[9.5px] mt-[4.5px] rounded-md hover:bg-red-500 hover:text-white"
                      >
                        <RiDeleteBin2Fill /> 
                        <span>
                            Delete Account
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default StudentDetails