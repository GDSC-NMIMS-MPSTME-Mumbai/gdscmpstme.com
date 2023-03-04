import { FC } from 'react';

interface Props {
  activeDepartment: string;
}

const Heading: FC<Props> = ({ activeDepartment }) => {
  const headers = {
    All: 'Team',
    'Super Core': 'Super Core',
    'Web Dev': 'Web Developers',
    'App Dev': 'App Developers',
    'AI/ML': 'AI Department',
    'Competitive Programming': 'Competitive Programmers',
    'Robotics & IOT': 'Robotics & IOT Department',
    'Public Relations': 'PR Department',
    Logistics: 'Logistics Department',
    Creatives: 'Creatives Department',
    Collaborations: 'Collaborations Department',
  };

  return (
    <div className="text-5xl leading-tight text-center font-bold my-10">
      Meet&nbsp;
      <span className="text-gdsc-blue">Our {headers[activeDepartment]}</span>
    </div>
  );
};

export default Heading;
