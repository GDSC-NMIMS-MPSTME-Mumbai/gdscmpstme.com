import { useState, useEffect } from "react";
//Importing components
import Heading from "./Heading";
import TeamButtons from "./TeamButtons";
import TeamList from "./TeamList";
import SearchMember from "./SearchMember";
//Importing team data
import OurTeamData from "./data/OurTeamData.json";
//Importing decorations
import greendots from "/public/decorations/dots-green.svg";
import peoplesvg from "/public/decorations/contact-person.svg";
import yellowbook from "/public/decorations/book-yellow.svg";
import redglobe from "/public/decorations/info-globe.svg";

// OurTeam is a functional component that displays a list of team members
const OurTeam = () => {
  // members state is initialized to the contents of OurTeamData
  const [members, setMembers] = useState(OurTeamData);
  // team state is used to store the name of the current team being displayed
  const [team, setTeam] = useState("");
  // member state is used to store the name of a specific team member being searched for
  const [member, setMember] = useState("");
  // departmentBtn state is used to store information about the buttons for filtering by team
  const [departmentBtn, setDepartmentBtn] = useState({
    activeDepartment: "All",
    departments: [
      { name: "Super Core" },
      { name: "Web" },
      { name: "Artificial Intelligence" },
      { name: "Android" },
      { name: "Competitive Programming" },
      { name: "Robotics & IOT" },
      { name: "Collaborations & Corporate Relations" },
      { name: "Digital Creatives" },
      { name: "Logistics" },
      { name: "Public Relations" },
      { name: "All" },
    ],
  });

  // SearchMemberbyName is an event handler that searches for a specific team member by name
  const SearchMemberbyName = (member) => {
    // If the member parameter is an empty string or undefined, reset members state to the contents of OurTeamData
    if (
      member == "" ||
      member == " " ||
      member == undefined ||
      member == null
    ) {
      setMembers(OurTeamData);
    } else {
      // Otherwise, filter OurTeamData by the member's name and set members state to the filtered results
      const updatedList = OurTeamData.filter((currentElement) => {
        return currentElement.name
          .toLowerCase()
          .trim()
          .includes(member.toLowerCase().trim());
      });
      setTeam("");
      setDepartmentBtn({ ...departmentBtn, activeDepartment: "All" });
      setMembers(updatedList);
    }
  };

  // useEffect hook runs SearchMemberbyName whenever the member state is updated
  useEffect(() => {
    SearchMemberbyName(member);
  }, [member]);

  return (
    <div className="flex flex-col relative items-center h-full">
      
      {/*Placing the decorations*/}
      <div className=" hidden  md:block absolute top-40 right-0">
        <img src={greendots} className="w-36" alt="greendots" />
      </div>
      <div className="hidden md:block absolute top-80 left-24">
        <img src={peoplesvg} className="w-24" alt="peoplesvg" />
      </div>
      <div className="hidden md:block absolute bottom-20 left-0">
        <img src={yellowbook} alt="yellowbook" />
      </div>
      <div className="hidden md:block absolute bottom-12 right-6 rotate-12">
        <img src={redglobe} alt="redglobe" />
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

      {/* SearchMember component is a search bar for searching by team member name */}
      <SearchMember
        setMember={setMember}
        member={member}
        departmentBtn={departmentBtn}
        setDepartmentBtn={setDepartmentBtn}
      />

      {/* TeamList component displays a list of team members */}
      <TeamList members={members} />
    </div>
  );
};

export default OurTeam;
