import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const KuppiModuleBox = ({index, profile, module}) => {
    const navigate = useNavigate()
    const { onClickModule} = useContext(AuthContext)
    
    const handleClick = () => {
      onClickModule(module)
        navigate('/kuppi-module-details')
    }

  return (
    <div 
    className='w-full h-auto flex flex-row justify-between items-center px-5 py-4 border-2 border-transparent bg-white rounded-lg shadow-lg hover:border-blue-500 cursor-pointer'
    onClick={handleClick}
    >
        <div className='flex flex-row gap-3 items-center'>
          <span className='text-[14pt] font-semibold'>{index+1}</span>
          <img src={profile} alt="profile" className='w-[130px] h-[80px] object-cover rounded-md'/>
          <span className='text-[16pt] font-bold'>{module}</span>
        </div>
    </div>
  )
}

export default KuppiModuleBox