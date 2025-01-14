import React, {useState} from 'react'
import UniversitySection from '../components/UniversitySection';
import DegreeProgramSection from '../components/DegreeProgramSection';
import SubjectSection from '../components/SubjectSection';

const University = () => {

  const [universitySection, setUniversitySection] = useState(true);
  const [degreeProgram, setDegreeProgram] = useState(false);
  const [subject, setsubject] = useState(false);

  return (
    <div className="px-5 py-3 flex flex-col gap-5 relative">
      <div className="w-full h-auto flex flex-row">
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            universitySection ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setUniversitySection(true);
            setDegreeProgram(false);
            setsubject(false);
          }}
        >
          University
        </button>
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            degreeProgram ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setUniversitySection(false);
            setDegreeProgram(true);
            setsubject(false);
          }}
        >
          Degree Program
        </button>
        <button
          className={`w-full h-auto text-start text-[16pt] font-semibold text-blue-500 border-b-[5px] ${
            subject ? 'border-blue-500' : 'border-white'
          }`}
          onClick={() => {
            setUniversitySection(false);
            setDegreeProgram(false);
            setsubject(true);
          }}
        >
          Subject
        </button>
      </div>

      <div
        className="w-full h-auto flex flex-col"
      >
        {
          universitySection ? <UniversitySection/> : degreeProgram ? <DegreeProgramSection/> : <SubjectSection/>
        }
      </div>
    </div>
  )
}

export default University