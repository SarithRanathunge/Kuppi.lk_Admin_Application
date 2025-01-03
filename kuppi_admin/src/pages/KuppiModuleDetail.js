import React, {useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const KuppiModuleDetail = () => {
  const {module} = useContext(AuthContext)
  const [about, setAbout] = useState(true)
  const [material, setMaterial] = useState(false)
  const [comments, setComments] = useState(false)


  return (
    <div className='w-ful h-full px-5 py-2 flex flex-col gap-2'>
      <span className='w-ful h-auto text-[24pt] font-bold text-left'>{module}</span>
      <div className='w-full h-auto flex flex-row gap-3'> 
        <div className='w-1/2 h-auto flex flex-col gap-5'>
          <video className='w-12/12 h-auto rounded-lg bg-gray-500'></video>
          <div className='w-full h-auto flex flex-row justify-between items-center p-5'>
            <button className='bg-blue-500 text-[16pt] px-8 py-3 outline-none font-semibold rounded-lg text-white hover:bg-blue-600'>Previous</button>
            <button className='bg-blue-500 text-[16pt] px-8 py-3 outline-none font-semibold rounded-lg text-white hover:bg-blue-600'>Next</button>
          </div>
        </div>

        <div className='w-1/2 h-[620px] flex flex-col gap-2 px-5 py-4 bg-blue-200 rounded-lg'>
          <div className='w-full flex flex-row items-center justify-center'>
            <button 
            className={`w-full h-auto text-[12pt] font-semibold pb-2 border-b-[5px] ${about ? 'border-b-blue-500': 'border-b-white'}`}
            onClick={()=>{
              setAbout(true)
              setMaterial(false)
              setComments(false)
            }}
            >
              About
            </button>
            <button 
            className={`w-full h-auto text-[12pt] font-semibold pb-2  border-b-[5px] ${material ? 'border-b-blue-500': 'border-b-white'}`}
            onClick={()=>{
              setAbout(false)
              setMaterial(true)
              setComments(false)
            }}
            >
              Study Material
            </button>
            <button 
            className={`w-full h-auto text-[12pt] font-semibold pb-2  border-b-[5px] ${comments ? 'border-b-blue-500': 'border-b-white'}`}
            onClick={()=>{
              setAbout(false)
              setMaterial(false)
              setComments(true)
            }}
            >
              Comments
            </button>
          </div>

          <div className='w-full h-auto gap-2'>
            {/* uploaded files and resources */}
          </div>
        </div>


      </div>
    </div>
  )
}

export default KuppiModuleDetail