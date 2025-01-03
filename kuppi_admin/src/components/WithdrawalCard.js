import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const WithdrawalCard = ({profile, name, price, date, status}) => {
  const { onClick, setValue } = useContext(AuthContext);

  const handleClick = () => {
    if(status === 'pending') {
      onClick();
    }
    setValue(profile, name, price, '1500.00', '60.00', '1440,00', '2200.00')
  }
  return (
    <div 
    className={`w-full h-auto flex flex-row justify-between items-center px-5 py-4 border-2 border-transparent bg-white rounded-lg shadow-lg ${status==='pending'? 'hover:border-blue-500 cursor-pointer':'hover:border-white'}`}
    onClick={handleClick}
    >
        <div className='flex flex-row gap-3'>
          <img src={profile} alt="profile" className='w-[80px] h-[80px] object-cover rounded-full'/>

          <div className='flex flex-col items-start justify-center'>
            <span className='text-[16pt] font-bold'>{name}</span>
            <span className='text-[14pt] font-bold text-blue-500'>Rs.{price}</span>
            <span className='text-[10pt]'>{date}</span>
          </div>
        </div>

        <div>
          <span className={`text-[14pt] font-bold ${status=== 'pending' ? 'text-blue-500' : status === 'accept' ? 'text-green-500': 'text-orange-400'}`}>
            {status=== 'pending' ? 'Pending...' : status === 'accept' ? 'Accept': 'Hold' }
          </span>
        </div>
    </div>
  )
}

export default WithdrawalCard