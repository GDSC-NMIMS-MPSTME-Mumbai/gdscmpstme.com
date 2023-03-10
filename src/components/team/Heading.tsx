import type { FC } from 'react';
import { activeDepartment } from '../../stores/department';
import { useStore } from '@nanostores/react';

const Heading: FC = () => {
  const $activeDepartment = useStore(activeDepartment);

  const headerForFilter = {
    All: 'Team',
    'Super Core': 'Super Core',
    'Web Dev': 'Web Developers',
    'App Dev': 'App Developers',
    'AI/ML': 'AI Department',
    'Competitive Programming': 'CP Department',
    'Robotics & IOT': 'Hardware Freaks',
    'Public Relations': 'PR Department',
    Logistics: 'Logistics Guys',
    Creatives: 'Creative Thinkers',
    Collaborations: 'Collaborators',
  };

  return (
    <h1 className="text-5xl font-bold text-center leading-tight my-10 mx-4">
      Meet{' '}
      <span className="text-gdsc-blue hidden md:inline">
        Our {headerForFilter[$activeDepartment]}
      </span>
      <span className="text-gdsc-blue md:hidden">Our Team</span>
    </h1>
  );
};

export default Heading;
