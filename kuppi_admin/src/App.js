import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SideBar from "./components/SideBar";
import HeaderBar from "./components/HeaderBar";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Tutor from "./pages/Tutor";
import KuppiUpload from "./pages/KuppiUpload";
import Withdrawal from "./pages/Withdrawal";
import Message from "./pages/Message";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import StudentDetails from './pages/StudentDetails';
import StudentPurchase from './pages/StudentPurchase';

function App() {
  return (
    <Router className='w-full h-full'>
      <div className='w-full h-full flex flex-row'>
        <SideBar/>
        <div className='w-full h-screen flex flex-col bg-gray-200'>
          <HeaderBar className='w-full h-auto'/>
          <Routes className='w-full h-auto'>
            <Route path='/' element={<Dashboard />} />
            <Route path='/student' element={<Student />} />
            <Route path='/student-details' element={<StudentDetails />} />
            <Route path='/student-purchases' element={<StudentPurchase />} />
            <Route path='/tutor' element={<Tutor />} />
            <Route path='/kuppi_upload' element={<KuppiUpload />} />
            <Route path='/withdrawal' element={<Withdrawal />} />
            <Route path='/message' element={<Message />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
