import React, {useState, useEffect, useMemo} from 'react'
import KuppiBox from '../components/KuppiBox';
import MainImage from '../assests/module.jpg';

const KuppiOption = ({ data }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-3">
      {data.map((item, index) => (
        <KuppiBox
          key={index}
          profile={item.profile}
          module={item.module}
          price={item.price}
          tutor={item.tutor}
          status={item.status}
        />
      ))}
    </div>
  );
};

const KuppiUpload = () => {
  const [pending, setPending] = useState(true);
  const [published, setPublished] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  const pendingArray = useMemo(() => [
    { profile:MainImage, module:'Graphic Design Fundermendals 01' , price: '1200.00', tutor: 'Hirantha Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 02' , price: '1200.00', tutor: 'Thrun Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 03' , price: '1200.00', tutor: 'Liviru Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 04' , price: '1200.00', tutor: 'Sarith Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 05' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 06' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 07' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 08' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals 09' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'pending' }
  ], []);

  const publishedArray = useMemo(() =>  [
    { profile:MainImage, module:'Graphic Design Fundermendals 01' , price: '1200.00', tutor: 'Hirantha Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 02' , price: '1200.00', tutor: 'Tharun Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 03' , price: '1200.00', tutor: 'Liviru Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 04' , price: '1200.00', tutor: 'Sarith Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 05' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 06' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 07' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 08' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals 09' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'published' },
    { profile:MainImage, module:'Graphic Design Fundermendals' , price: '1200.00', tutor: 'Alex Perera', status: 'published' }
  ], []);

  useEffect(() => {
    if (pending) {
      setCurrentData(pendingArray);
    } else if (published) {
      setCurrentData(publishedArray);
    } 
  }, [pending, published, pendingArray, publishedArray]);


  return (
    <div className="px-5 py-3 flex flex-col gap-5 relative">
      <div className="w-full h-auto flex flex-row">
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            pending ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setPending(true);
            setPublished(false);
          }}
        >
          Pending Kuppi
        </button>
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            published ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setPending(false);
            setPublished(true);
          }}
        >
          Published Kuppi
        </button>
      </div>

      <div
        className="w-full h-auto flex flex-col overflow-y-auto px-8 py-1"
        style={{ maxHeight: '600px' }}
      >
        <KuppiOption data={currentData}/>
      </div>
    </div>
  )
}

export default KuppiUpload