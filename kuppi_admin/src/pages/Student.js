import React, {useState, useEffect} from 'react'
import { IoSearch } from "react-icons/io5"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import SortImage from '../assests/sort.png'
import MachineImage from '../assests/machine.png'
import MaximizeImage from '../assests/maximize.png'
import NoteImage from '../assests/note.png'
import PrintImage from '../assests/print.png'
import DeleteImage from '../assests/delete.png'
import StudentTable from '../components/StudentTable'
import Profile from '../assests/admin.jpg'

const Student = () => {
  const [search, setSearch] = useState('');
  const [time, setTime] = useState('');
  const [university, setUniversity] = useState('');

  useEffect(() => {
    searching()
  })

  const searching = () =>{
    console.log(search);
  }

  const tableArray = [
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
    {profile:Profile,id:'S00001',name:'Alex Perera',university:'NIBM', purchases:'20,000'},
  ]

  return (
    <div className='flex flex-col p-5 gap-5'>
      <span className='text-[18pt] font-bold text-blue-500'>Students</span>

      <div className='w-full h-auto flex flex-row gap-5 items-center'>
        <form className='w-full flex flex-row items-center bg-white rounded-lg px-3 py-1 border-2 border-white focus:border-blue-500'>
          <div>
            <IoSearch className='text-gray-400'/>
          </div>
          <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search Documents'
          className='w-full h-auto px-3 py-1 outline-none'
           />
        </form>

        <button className='w-[100px] flex flex-row items-center justify-center gap-1'>
          <span className='text-[12pt]'>Sort by</span>
          <MdOutlineKeyboardArrowDown className='text-[14pt] mt-1'/>
        </button>

        <button className='w-auto h-auto'>
          <img src={SortImage} alt="sort Icon" className='object-cover'/>
        </button>
      </div>

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

        <div className='w-5/12 flex felx-row gap-3'>
          <select
              value={time}
              onChange={(e) => { setTime(e.target.value) }}
              className="w-full px-2 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            >
              <option>This Month</option>
              <option>Last Month</option>
          </select>

          <select
              value={university}
              onChange={(e) => { setUniversity(e.target.value) }}
              className="w-full px-2 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            >
              <option>University</option>
              <option>NIBM</option>
          </select>
        </div>
      </div>

      <div className='w-full h-auto flex flex-col'>
        <StudentTable  data={tableArray}/>
      </div>
    </div>
  )
}

export default Student