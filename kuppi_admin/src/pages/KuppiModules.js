import React, {useState, useContext} from 'react'
import MainImage from '../assests/main-image.jpg'
import ProfileImage from '../assests/module.jpg'
import KuppiModuleBox from '../components/KuppiModuleBox'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { IoIosClose } from "react-icons/io";

const KuppiModules = () => {
  const navigate = useNavigate()
  const { kuppi, tutor } = useContext(AuthContext)
  const [publish, setPublish] = useState(false)

  const dataArray =[
    { profile:ProfileImage, module:'Introduction of Graphic Design 01'},
    { profile:ProfileImage, module:'Introduction of Graphic Design 02'},
    { profile:ProfileImage, module:'Introduction of Graphic Design 03'},
    { profile:ProfileImage, module:'Introduction of Graphic Design 04'},
    { profile:ProfileImage, module:'Introduction of Graphic Design 05'},
    { profile:ProfileImage, module:'Introduction of Graphic Design 06'},
    { profile:ProfileImage, module:'Introduction of Graphic Design 07'},
  ]

  const handleOnClick =()=>{
    setPublish((prev)=>!prev)
  }

  const conformOnClick =()=>{
    setPublish((prev)=>!prev)
    navigate('/kuppi-upload');
   }
  return (
    <div className='px-5 py-3 flex flex-col gap-5 relative'>
        <div className='w-full h-[200px] relative'>
            <img src={MainImage} alt="main-image" className='w-full h-full object-cover rounded-lg' />
            <div className='w-fit h-fit flex flex-col absolute top-12 left-16 p-4 bg-white bg-opacity-50 rounded-lg'>
                <span className='text-[24pt] font-semibold '>{kuppi}</span>
                <span className='text-[16pt] font-semibold'>{tutor}</span>
            </div>
        </div>
        
        <div className='w-full h-auto flex flex-col items-end'>
            <button onClick={handleOnClick} className='w-[150px] h-auto text-center text-[14pt] py-4 bg-green-400 rounded-lg text-white font-medium hover:bg-green-600'>
                Publish
            </button>
        </div>

        <div
        className="w-full h-auto flex flex-col overflow-y-auto px-5 py-1 gap-3"
        style={{ maxHeight: '360px' }}
      >
        {
            dataArray.map((item, index)=>(
                <KuppiModuleBox key={index} index={index} profile={item.profile} module={item.module}/>
            ))
        }
      </div>
      {
        publish && 
        <div className='w-full h-full flex flex-col px-5 py-3 inset-0 absolute'>
          <div className='w-full h-full flex flex-col bg-white bg-opacity-40 rounded-lg justify-center items-center'>
            <div className='w-[400px] h-auto py-6 px-12 flex flex-col gap-6 items-center justify-center bg-white relative rounded-lg shadow-lg'>
              <button className='text-[16pt] text-black absolute top-2 right-2'
               onClick={()=>{
                setPublish((prev)=>!prev)
               }}
              >
                  <IoIosClose />
              </button>
              <span className='w-full h-auto text-center text-[18pt] font-semibold'>Comform the Kuppi publish</span>
              <button className='w-full h-auto py-3 rounded-lg bg-blue-500 text-[12pt] text-white hover:bg-blue-600'
               onClick={conformOnClick}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default KuppiModules