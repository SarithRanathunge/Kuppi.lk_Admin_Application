import React, {useState} from 'react'
import MachineImage from '../assests/machine.png'
import MaximizeImage from '../assests/maximize.png'
import NoteImage from '../assests/note.png'
import PrintImage from '../assests/print.png'
import DeleteImage from '../assests/delete.png'
import TutorPurchaseTable from '../components/TutorPurchaseTable'
import ModuleImage from '../assests/module.jpg'

const TutorPurchase = () => {
  const [time, setTime] = useState('');

  const tableArray = [
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'},
    {image:ModuleImage,kuppi:'Sample Kuppi',course:'Introduction of CS',year:'2024',price:'1000.00'}
  ]

  return (
    <div className='flex flex-col p-5 gap-5'>
        <span className='text-[18pt] font-bold text-blue-500'>Your Kuppi</span>

        <div className='w-full h-auto flex flex-row items-center justify-between'>
            <div className='flex flex-row gap-2'>
              <button className='p-4 rounded-sm border-2 border-gray-300'>
                <img src={MachineImage} alt="image-icon" />
              </button>
    
              <button className='p-4 rounded-sm border-2 border-gray-300'>
                <img src={MaximizeImage} alt="image-icon" />
              </button>
    
              <button className='p-4 rounded-sm border-2 border-gray-300'>
                <img src={NoteImage} alt="image-icon" />
              </button>
    
              <button className='p-4 rounded-sm border-2 border-gray-300'>
                <img src={PrintImage} alt="image-icon" />
              </button>
    
              <button className='p-4 rounded-sm border-2 border-gray-300'>
                <img src={DeleteImage} alt="image-icon" />
              </button>
            </div>
    
            <div className='w-3/12 flex felx-row gap-3'>
              <select
                  value={time}
                  onChange={(e) => { setTime(e.target.value) }}
                  className="w-full px-2 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                >
                  <option>This Month</option>
                  <option>Last Month</option>
              </select>
            </div>
        </div>

        <div className='w-full h-auto flex flex-col'>
          <TutorPurchaseTable  data={tableArray}/>
        </div>

    </div>
  )
}

export default TutorPurchase