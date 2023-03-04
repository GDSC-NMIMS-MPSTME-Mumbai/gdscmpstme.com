import { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  activeDepartment: string;
  setActiveDepartment: Dispatch<SetStateAction<string>>;
}

const TeamButtons: FC<Props> = ({ activeDepartment, setActiveDepartment }) => {
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
    <div className="flex md:flex-wrap md:overflow-hidden md:justify-center my-2 w-11/12 overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gdsc-yellow scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
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
