import React,{ useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const KuppiBox = ({profile, module, price, tutor, status}) => {
    const navigate = useNavigate()
    const { onClickKuppi } = useContext(AuthContext)

    const handleClick = () => {
        if( status === 'pending'){
            onClickKuppi(module, tutor)
            navigate('/kuppi-modules')
        }
    }
    
  return (
    <div 
    className={`w-full h-auto flex flex-row justify-between items-center px-5 py-4 border-2 border-transparent bg-white rounded-lg shadow-lg ${status==='pending'? 'hover:border-blue-500 cursor-pointer':'hover:border-white'}`}
    onClick={handleClick}
    >
        <div className='flex flex-row gap-3'>
          <img src={profile} alt="profile" className='w-[130px] h-[80px] object-cover rounded-md'/>

          <div className='flex flex-col items-start justify-center'>
            <span className='text-[16pt] font-bold'>{module}</span>
            <span className='text-[14pt] font-bold text-blue-500'>Rs.{price}</span>
            <span className='text-[10pt]'>{tutor}</span>
          </div>
        </div>

        <div>
          <span className={`text-[14pt] font-bold ${status=== 'pending' ? 'text-blue-500' : 'text-green-500'}`}>
            {status=== 'pending' ? 'Pending...' : 'Published' }
          </span>
        </div>
    </div>
  )
}

export default KuppiBox