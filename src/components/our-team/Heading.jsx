import { useState } from 'react';
// Heading component takes in a prop called team(title of the department)
const Heading = ({ team }) => {
  // Heading component returns a div element containing the text to display team

  const headers = {
    '': 'Team',
    'Super Core': 'Super Core',
    'Web Dev': 'Web Developers',
    'App Development': 'Android Developers',
    'AI/ML': 'AI Department',
    'Competitive Programming': 'Competitive Programmers',
    'Robotics & IOT': 'Robotics & IOT Department',
    'Public Relations': 'PR Department',
    Logistics: 'Logistics Department',
    Creatives: 'Creatives Department',
    Collaborations: 'Collaborations Department',
  };

  return (
    <div className="text-5xl text-center font-bold my-10">
      Meet&nbsp;
      <span className="text-gdsc-blue">Our {headers[team]}</span>
    </div>
  );
};

//Heading is exported so that it can be used in OurTeam component(parent component)
export default Heading;
