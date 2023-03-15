import type { FC } from 'react';
import { activeDepartment } from '../../stores/department';
import { useStore } from '@nanostores/react';

const TeamButtons: FC = () => {
  const $activeDepartment = useStore(activeDepartment);

  const departments = [
    'All',
    'Super Core',
    'Web Dev',
    'App Dev',
    'Competitive Programming',
    'AI/ML',
    'Robotics & IOT',
    'Creatives',
    'Collaborations',
    'Logistics',
    'Public Relations',
  ];

  return (
    <div className="flex md:flex-wrap md:justify-center gap-x-2 md:gap-4 w-11/12 md:w-full md:px-48 max-w-screen-2xl mx-auto mb-12 md:mb-0 px-4 pb-6 md:pb-0 overflow-auto scrollbar-thin scrollbar-thumb-gdsc-yellow scrollbar-track-white scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
      {departments.map((department, id) => {
        return (
          <button
            key={id}
            className={`uppercase rounded-3xl border-2 border-gdsc-yellow py-2 px-4 font-medium whitespace-nowrap ${
              $activeDepartment === department
                ? 'bg-gdsc-yellow text-white'
                : null
            }`}
            onClick={() => activeDepartment.set(department)}
          >
            {department}
          </button>
        );
      })}
    </div>
  );
};

export default TeamButtons;
