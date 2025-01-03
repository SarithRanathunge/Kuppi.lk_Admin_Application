import React, { useState, useEffect, useContext, useMemo  } from 'react';
import WithdrawalCard from '../components/WithdrawalCard';
import ProfileImage from '../assests/admin.jpg';
import { AuthContext } from '../context/AuthContext';
import WithdrawalDetailSection from '../components/WithdrawalDetailSection';

const WithdrawalOption = ({ data }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-3">
      {data.map((item, index) => (
        <WithdrawalCard
          key={index}
          profile={item.profile}
          name={item.name}
          price={item.price}
          date={item.date}
          status={item.status}
        />
      ))}
    </div>
  );
};

const Withdrawal = () => {
  const [request, setRequest] = useState(true);
  const [accept, setAccept] = useState(false);
  const [hold, setHold] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const { open } = useContext(AuthContext);

  const requestArray = useMemo(() => [
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Thrun Perera', price: '120000.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Hirantha Perera', price: '112830.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Liviru Perera', price: '150000.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Sarith Perera', price: '1000000.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'pending' },
  ], []);

  const acceptArray = useMemo(() => [
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'accept' },
  ], []);

  const holdArray = useMemo(() => [
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' },
    { profile: ProfileImage, name: 'Alex Perera', price: '1200.00', date: '9/19/2024 2.17a.m.', status: 'hold' }
  ], []);

  // Update the current data based on selected tab
  useEffect(() => {
    if (request) {
      setCurrentData(requestArray);
    } else if (accept) {
      setCurrentData(acceptArray);
    } else if (hold) {
      setCurrentData(holdArray);
    }
  },[request, accept, hold, requestArray, acceptArray, holdArray]); // Dependencies for the effect

  return (
    <div className="px-5 py-3 flex flex-col gap-5 relative">
      <div className="w-full h-auto flex flex-row">
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            request ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setRequest(true);
            setAccept(false);
            setHold(false);
          }}
        >
          Withdrawal Request
        </button>
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            accept ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setRequest(false);
            setAccept(true);
            setHold(false);
          }}
        >
          Accept Withdrawal
        </button>
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            hold ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setRequest(false);
            setAccept(false);
            setHold(true);
          }}
        >
          Hold Withdrawal
        </button>
      </div>

      <div
        className="w-full h-auto flex flex-col overflow-y-auto px-8 py-1"
        style={{ maxHeight: '600px' }}
      >
        <WithdrawalOption data={currentData} />
      </div>
      {open && (
        <div className='w-full h-full flex flex-col px-5 py-3 inset-0 absolute'>
          <div className='w-full h-full flex flex-col bg-white bg-opacity-40 rounded-sm justify-center items-center'>
            <WithdrawalDetailSection/>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Withdrawal;
