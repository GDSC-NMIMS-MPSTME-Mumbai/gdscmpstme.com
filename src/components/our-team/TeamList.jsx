import Card from "./Card";

const TeamList = ({ data }) => {
  // TeamList component returns makes up a grid like structure which contains all the member cards
  return (
    <div className=" flex flex-wrap items-center justify-center mx-10">
      {data.map((member, key) => {
        return (
          <Card
            // name prop is set to the name of the team member
            name={member.name}
            // department prop is set to the department of the team member
            department={member.department}
            // title prop is set to the title of the team member
            title={member.title}
            // key prop is set to a unique key for each team member
            key={key}
            // src prop is set to the src of the team member's avatar
            src={member.src}
          />
        );
      })}
    </div>
  );
};

//TeamList component is exported so that it can be used in OurTeam component(parent component)
export default TeamList;
