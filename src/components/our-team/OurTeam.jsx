import { useState, useEffect } from 'react';
//Importing components
import TeamList from './TeamList';
import Heading from './Heading';
import TeamButtons from './TeamButtons';

// OurTeam is a functional component that displays a list of team members
const OurTeam = ({ OurTeamData }) => {
  // members state is initialized to the contents of OurTeamData

  const [members, setMembers] = useState(OurTeamData);
  // team state is used to store the name of the current team being displayed
  const [team, setTeam] = useState('');
  // member state is used to store the name of a specific team member being searched for
  const [member, setMember] = useState('');
  // departmentBtn state is used to store information about the buttons for filtering by team
  const [departmentBtn, setDepartmentBtn] = useState({
    activeDepartment: 'All',
    departments: [
      { name: 'Super Core' },
      { name: 'Web Dev' },
      { name: 'AI/ML' },
      { name: 'App Development' },
      { name: 'Competitive Programming' },
      { name: 'Robotics & IOT' },
      { name: 'Collaborations' },
      { name: 'Creatives' },
      { name: 'Logistics' },
      { name: 'Public Relations' },
      { name: 'All' },
    ],
  });

  return (
    <div className="flex flex-col relative md:overflow-hidden items-center h-full max-w-screen">
      {/*Placing the decorations*/}
      <div className=" hidden md:block absolute top-24 -right-40">
        <img src="decorations/dots-green.svg" className="" alt="greendots" />
      </div>
      <div className="hidden md:block absolute top-60 left-20">
        <img
          src="decorations/contact-person.svg"
          className="w-24"
          alt="peoplesvg"
        />
      </div>
      <div className="hidden md:block absolute bottom-20 left-0">
        <img src="decorations/book-yellow.svg" alt="yellowbook" />
      </div>
      <div className="hidden md:block absolute bottom-12 right-6 rotate-12">
        <img src="decorations/info-globe.svg" alt="redglobe" />
      </div>

      {/* Heading component displays the name of the current team */}
      <Heading team={team} />

      {/* TeamButtons component displays buttons for filtering by team */}
      <TeamButtons
        setDepartmentBtn={setDepartmentBtn}
        setMembers={setMembers}
        setTeam={setTeam}
        departmentBtn={departmentBtn}
        OurTeamData={OurTeamData}
      />

      {/* TeamList component displays a list of team members */}
      <TeamList members={members} />
    </div>
  );
};

export default OurTeam;
