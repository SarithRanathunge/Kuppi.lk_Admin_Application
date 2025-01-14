import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import Logo from '../assests/Kuppi.lk_logo.png';
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineReport } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    const [dashboard, setDashboard] = useState(false);
    const [student, setStudent] = useState(true);
    const [tutor, setTutor] = useState(true);
    const [university, setUniversity] = useState(true);
    const [kuppi, setKuppi] = useState(true);
    const [withdrawal, setWithdrawal] = useState(true);
    const [message, setMessage] = useState(true);
    const [report, setReport] = useState(true);
    const [settings, setSettings] = useState(true);

    
    return (
        <div className="w-2/12 h-full flex flex-col py-3 px-1">
            <img src={Logo} alt="Kuppi-logo" className="w-full h-16 object-contain" />
            <div
                onClick={() => {
                    setDashboard(false)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(true)
                    setSettings(true)
                    navigate('/')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer mt-5 rounded-lg  ${!dashboard ? 'text-blue-600 bg-blue-200' : 'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <RxDashboard className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Dashboard</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(false)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(true)
                    setSettings(true)
                    navigate('/student')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!student ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <PiStudentFill className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Student</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(false)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(true)
                    setSettings(true)
                    navigate('/tutor')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!tutor ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <FaChalkboardTeacher className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Tutor</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(false)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(true)
                    setSettings(true)
                    navigate('/university')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!university ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <FaUniversity   className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">University</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(false)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(true)
                    setSettings(true)
                    navigate('/kuppi-upload')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!kuppi ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <FaPhotoVideo className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Kuppi Upload</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(false)
                    setMessage(true)
                    setReport(true)
                    setSettings(true)
                    navigate('/withdrawal')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!withdrawal ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <PiHandWithdrawFill className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Withdrawals</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(false)
                    setReport(true)
                    setSettings(true)
                    navigate('/message')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 mt-5 items-center font-medium cursor-pointer rounded-lg ${!message ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <LuMessageSquareMore className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Message</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(false)
                    setSettings(true)
                    navigate('/reports')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!report ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <MdOutlineReport className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Report</span>
                </div>
            </div>
            <div
                onClick={() => {
                    setDashboard(true)
                    setStudent(true)
                    setTutor(true)
                    setUniversity(true)
                    setKuppi(true)
                    setWithdrawal(true)
                    setMessage(true)
                    setReport(true)
                    setSettings(false)
                    navigate('/settings')
                }}
                className={`w-full h-auto flex flex-row justify-center py-3 items-center font-medium cursor-pointer rounded-lg ${!settings ? 'text-blue-600 bg-blue-200':'text-gray-500 bg-white'}`}
            >
                <div className='w-[150px] flex felx-row justify-start items-center gap-2'>
                    <MdOutlineSettings className='text-[14pt]'/>
                    <span className="text-center text-[12pt]">Settings</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
