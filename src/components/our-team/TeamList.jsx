import Card from './Card';

const TeamList = ({ members }) => {
  // TeamList component returns makes up a grid like structure which contains all the member cards
  return (
    <div className=" flex flex-wrap  justify-center mx-16 max-w-6xl  md:min-h-[500px]">
      {members.map((member, key) => {
        return (
          <Card
            // name prop is set to the name of the team member
            name={member.name}
            // department prop is set to the department of the team member
            department={member.department}
            // title prop is set to the title of the team member
            title={member.designation}
            // key prop is set to a unique key for each team member
            key={key}
            src={member.imgUrl}
          />
        );
      })}
    </div>
  );
};

//TeamList component is exported so that it can be used in OurTeam component(parent component)
export default TeamList;
