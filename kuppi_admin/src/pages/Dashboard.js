import React, {useState} from 'react'
import DashboardDataBox from '../components/DashboardDataBox'
import { IoIosSearch } from "react-icons/io";
import DashboardTable from '../components/DashboardTable';
import Icon_One from '../assests/icon_01.jpg'
import Icon_Two from '../assests/icon_02.jpg'
import Icon_Three from '../assests/icon_03.jpg'

const Dashboard = () => {
  const [ purchase, setPurchased] =useState(true)
  const [ revenue, setRevenue] = useState(false)
  const [ withdrawal, setWithdrawal] = useState(false)
  const [search, setSearch] = useState('')

  const onClickPurchase = () =>{
    setPurchased(true)
    setRevenue(false)
    setWithdrawal(false)
  }

  const onClickRevenue = () =>{
    setPurchased(false)
    setRevenue(true)
    setWithdrawal(false)
  }

  const onClickWithdrawal = () =>{
    setPurchased(false)
    setRevenue(false)
    setWithdrawal(true)
  }

  const dataArray =[
    {icon:Icon_One, headData:'75', type:'Total Purchase', precentage:'4%', days:'30', position:'up'},
    {icon:Icon_Two, headData:'Rs.12800.00', type:'Total Revenue', precentage:'12%', days:'30', position:'down'},
    {icon:Icon_Three, headData:'Rs.6500.00', type:'Total Withrawal', precentage:'4%', days:'30', position:'up'}
  ]
  return (
    <div className='flex flex-col p-5 gap-9'>
      <div className='w-full h-auto flex flex-row justify-around'>
        {
          dataArray.map((data,index) => (
            <DashboardDataBox key={index} icon={data.icon} headData={data.headData} type={data.type} precentage={data.precentage} days={data.days} position={data.position}/>
          ))
        }
      </div>
      
      <div className='w-full h-auto flex flex-col gap-3'>
        <div className='w-full h-auto flex flex-row justify-center items-center'>
          <button onClick={onClickPurchase} className={`w-full h-auto text-[16pt] outline-none font-medium border-b-[5px] text-start ${purchase?`border-b-blue-500 text-blue-500`:`border-b-white text-black`}`}>Total Purchase</button>
          <button onClick={onClickRevenue} className={`w-full h-auto text-[16pt] outline-none font-medium border-b-[5px] text-start ${revenue?`border-b-blue-500 text-blue-500`:`border-b-white text-black`}`}>Total Revenue</button>
          <button onClick={onClickWithdrawal} className={`w-full h-auto text-[16pt] outline-none font-medium border-b-[5px] text-start ${withdrawal?`border-b-blue-500 text-blue-500`:`border-b-white text-black`}`}>Total Withdrawal</button>
        </div>
        <div className='w-[700px] h-auto flex flex-row items-center rounded-lg bg-white gap-2 p-2 py-3'>
            <IoIosSearch className='text-[14pt]'/>
            <input 
            type="text" 
            value={search}
            placeholder='Search'
            onChange={(e) => { 
              setSearch(e.target.value); 
              console.log(search)
            }}
            className='w-full text-[14pt] border-none outline-none'
            />
        </div>
        <div className='w-full h-auto flex flex-col'>
          <DashboardTable/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard