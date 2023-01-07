// Heading component takes in a prop called team(title of the department)
const Heading = ({ team }) => {
  // Heading component returns a div element containing the text "Meet Our [team] Team"
  return (
    <div className="text-5xl text-center font-bold my-10">
      Meet&nbsp;
      <span className="text-blue-400">Our {team} Team</span>
    </div>
  );
};

//Heading is exported so that it can be used in OurTeam component(parent component)
export default Heading;
