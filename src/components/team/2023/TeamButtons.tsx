import type { FC } from 'react';
import { activeDepartment } from '../../../stores/department';
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
    'UI/UX',
    'Photography',
    'Business Development',
    'Digital Creatives',
    'Event Ops',
    'In-House Creatives',
    'Marketing and Communication',
  ];

  return (
    <div className="mx-auto mb-12 flex w-11/12 max-w-screen-2xl gap-x-2 overflow-auto px-4 pb-6 scrollbar-thin scrollbar-track-white scrollbar-thumb-gdsc-yellow scrollbar-track-rounded-md scrollbar-thumb-rounded-md md:mb-0 md:w-full md:flex-wrap md:justify-center md:gap-4 md:px-48 md:pb-0">
      {departments.map((department, id) => {
        return (
          <button
            key={id}
            className={`whitespace-nowrap rounded-3xl border-2 border-gdsc-yellow py-2 px-4 font-medium uppercase ${
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
