import { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  activeDepartment: string;
  setActiveDepartment: Dispatch<SetStateAction<string>>;
}

const TeamButtons: FC<Props> = ({ activeDepartment, setActiveDepartment }) => {
  const departments = [
    'Super Core',
    'Web Dev',
    'App Development',
    'Competitive Programming',
    'AI/ML',
    'Robotics & IOT',
    'Creatives',
    'Collaborations',
    'Logistics',
    'Public Relations',
    'All',
  ];

  return (
    <div className="flex scrollbar px-8 scrollbar-track-gdsc-yellow md:flex-wrap md:overflow-hidden md:justify-center mx-20 my-2 uppercase max-w-full">
      {departments.map(department => {
        return (
          <button
            onClick={() => setActiveDepartment(department)}
            className={`whitespace-nowrap uppercase rounded-3xl border-2 py-2 px-4 mb-6  w-fit fw-400  border-gdsc-yellow mx-2 md:border-transparent hover:border-gdsc-yellow md:mb-2 ${
              activeDepartment === department
                ? 'bg-gdsc-yellow text-white'
                : null
            }`}
            key={department}
          >
            {department}
          </button>
        );
      })}
    </div>
  );
};

export default TeamButtons;
