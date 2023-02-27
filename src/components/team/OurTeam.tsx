import { FC, useState } from 'react';
import Heading from './Heading';
import TeamButtons from './TeamButtons';
import Card from './Card';

interface Props {
  teamMembers: Member[];
}

const OurTeam: FC<Props> = ({ teamMembers }) => {
  const [activeDepartment, setActiveDepartment] = useState('All');

  return (
    <div className="flex flex-col relative md:overflow-hidden items-center h-full max-w-screen">
      {/* Decorations */}
      <div className=" hidden md:block absolute top-24 -right-40">
        <img src="decorations/dots-green.svg" className="" alt="greendots" />
      </div>
      <div className="hidden md:block absolute top-60 left-20">
        <img
          src="decorations/contact-person.svg"
          className="w-24"
          alt="peoplesvg"
        />
      </div>
      <div className="hidden md:block absolute bottom-20 left-0">
        <img src="decorations/book-yellow.svg" alt="yellowbook" />
      </div>
      <div className="hidden md:block absolute bottom-12 right-6 rotate-12">
        <img src="decorations/info-globe.svg" alt="redglobe" />
      </div>

      <Heading activeDepartment={activeDepartment} />

      <TeamButtons
        activeDepartment={activeDepartment}
        setActiveDepartment={setActiveDepartment}
      />

      <div className=" flex flex-wrap  justify-center mx-16 max-w-6xl  md:min-h-[500px]">
        {teamMembers
          .filter(
            member =>
              member.department === activeDepartment ||
              activeDepartment === 'All',
          )
          .map((member, key) => {
            return (
              <Card
                name={member.name}
                department={member.department}
                designation={member.designation}
                key={key}
                src={member.imgUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default OurTeam;
