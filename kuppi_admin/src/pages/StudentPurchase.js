import React, {useState} from 'react'
import MachineImage from '../assests/machine.png'
import MaximizeImage from '../assests/maximize.png'
import NoteImage from '../assests/note.png'
import PrintImage from '../assests/print.png'
import DeleteImage from '../assests/delete.png'
import StudentPurchaseTable from '../components/StudentPurchaseTable'
import ModuleImage from '../assests/module.jpg'

const StudentPurchase = () => {
  const [time, setTime] = useState('');

  const tableArray = [
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'},
      {image:ModuleImage,kuppi:'Sample Kuppi',tutor:'Alex Perera',date:'30 Apr, 2017 to 24 Otc 2020',price:'1000.00'}
    ]

  return (
    <div className='flex flex-col p-5 gap-5'>
        <span className='text-[18pt] font-bold text-blue-500'>All Kuppi Purchases</span>

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
          <StudentPurchaseTable  data={tableArray}/>
        </div>

    </div>
  )
}

export default StudentPurchase