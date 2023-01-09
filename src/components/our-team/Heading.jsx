import { useState } from "react";
// Heading component takes in a prop called team(title of the department)
const Heading = ({ team }) => {
  // Heading component returns a div element containing the text to display team

  const headers={
    "":"Team",
    "Super Core":"Super Core",
    "Web":"Web Developers",
    "Android":"Android Developers",
    "Artificial Intelligence":"AI Department",
    "Competitive Programming":"Competitive Programmers",
    "Robotics & IOT":"Robotics & IOT Department",
    "Public Relations":"PR Department",
    "Logistics":"Logistics Department",
    "Digital Creatives":"Digital Creatives Department",
    "Collaborations & Corporate Relations":"Collaborations Department"
  }

  return (
    <div className="text-5xl text-center font-bold my-10">
      Meet&nbsp;
      <span className="text-gdsc-blue-light">Our {headers[team]}</span>
    </div>
  );
};

//Heading is exported so that it can be used in OurTeam component(parent component)
export default Heading;
