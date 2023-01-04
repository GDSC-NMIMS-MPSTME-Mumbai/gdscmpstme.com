import { useState, useEffect } from "react";
//Importing components
import Heading from "./our-team/Heading";
import TeamButtons from "./our-team/TeamButtons";
import TeamList from "./our-team/TeamList";
import SearchMember from "./our-team/SearchMember";
//Importing team data
import OurTeamData from "./data/OurTeamData.json";
//Importing decorations
import greendots from "../assets/decorations/green-dots-decor.svg";
import peoplesvg from "../assets/decorations/decoration-5.svg";
import yellowbook from "../assets/decorations/decoration-book-yellow.svg";
import redglobe from "../assets/decorations/decoration-4.svg";

// OurTeam is a functional component that displays a list of team members
const OurTeam = () => {
  // data state is initialized to the contents of OurTeamData
  const [data, setData] = useState(OurTeamData);
  // team state is used to store the name of the current team being displayed
  const [team, setTeam] = useState("");
  // member state is used to store the name of a specific team member being searched for
  const [member, setMember] = useState("");
  // btn state is used to store information about the buttons for filtering by team
  const [btn, setBtn] = useState({
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
    // If the member parameter is an empty string or undefined, reset data state to the contents of OurTeamData
    if (
      member == "" ||
      member == " " ||
      member == undefined ||
      member == null
    ) {
      setData(OurTeamData);
    } else {
      // Otherwise, filter OurTeamData by the member's name and set data state to the filtered results
      const updatedList = OurTeamData.filter((currentElement) => {
        return currentElement.name
          .toLowerCase()
          .trim()
          .includes(member.toLowerCase().trim());
      });
      setTeam("");
      setBtn({ ...btn, activeDepartment: "All" });
      setData(updatedList);
    }
  };

  // useEffect hook runs SearchMemberbyName whenever the member state is updated
  useEffect(() => {
    SearchMemberbyName(member);
  }, [member]);

  return (
    <div className="flex flex-col relative items-center  h-full">
      
      {/*Placing the decorations*/}
      <div className="svgdec invisible md:visible absolute top-36 right-0">
        <img src={greendots} alt="greendots" />
      </div>
      <div className="decperson invisible md:visible absolute top-80 left-24">
        <img src={peoplesvg} alt="peoplesvg" />
      </div>
      <div className="book invisible md:visible absolute bottom-20 left-0">
        <img src={yellowbook} alt="yellowbook" />
      </div>
      <div className="globe invisible md:visible absolute bottom-12 right-6 rotate-12">
        <img src={redglobe} alt="redglobe" />
      </div>

      {/* Heading component displays the name of the current team */}
      <Heading team={team} />

      {/* TeamButtons component displays buttons for filtering by team */}
      <TeamButtons
        setBtn={setBtn}
        setData={setData}
        setTeam={setTeam}
        btn={btn}
        OurTeamData={OurTeamData}
      />

      {/* SearchMember component is a search bar for searching by team member name */}
      <SearchMember
        setMember={setMember}
        member={member}
        btn={btn}
        setBtn={setBtn}
      />

      {/* TeamList component displays a list of team members */}
      <TeamList data={data} />
    </div>
  );
};

export default OurTeam;
