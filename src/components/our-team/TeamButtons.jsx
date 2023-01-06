const TeamButtons = ({ setBtn, setData, setTeam, btn,OurTeamData }) => {
  const teamFilter = (name, index) => {
    if (name == "All") {
      // Set the active department to "All"
      setBtn({ ...btn, activeDepartment: "All" });
      // Clear the team name
      setTeam("");
      // Set the data to the full list of team members
      setData(OurTeamData);
    } else {
      // Set the active department to the selected department
      setBtn({ ...btn, activeDepartment: name });
      // Set the team name to the selected department
      setTeam(name);
      // Filter the list of team members by the selected department
      const filteredData = OurTeamData.filter(
        (element) => element.department.trim() === name.trim()
      );
      // Set the data to the filtered list of team members
      setData(filteredData);
    }
  };
  // Function to determine the background color of the button for a given department
  const toggleBtnBgColorStyles = (index) => {
    // If the button corresponds to the active department, return the active background color
    return btn.departments[index].name === btn.activeDepartment
      ? "#FBBF0E"
      : "transparent";
  };
  // Function to determine the text color of the button for a given department
  const toggleBtnTextStyles = (index) => {
    // If the button corresponds to the active department, return the active text color(white) otherwise black
    return btn.departments[index].name == btn.activeDepartment
      ? "white"
      : "black";
  };

  return (
    <div className="flex overflow-x-scroll md:flex-wrap md:overflow-x-hidden md:justify-center my-2 uppercase max-w-full">
      {btn.departments.map((department, index) => {
        return (
          <button
            onClick={() => {
              teamFilter(department.name, index);
            }}
            className={`whitespace-nowrap uppercase rounded-3xl border-2 py-2 px-4 w-fit fw-400  border-yellow-300 mx-2 md:border-transparent hover:border-yellow-300 `}
            key={department.name}
            style={{
              backgroundColor: `${toggleBtnBgColorStyles(index)}`,
              color: `${toggleBtnTextStyles(index)}`,
            }}
          >
            {department.name}
          </button>
        );
      })}
    </div>
  );
};

//TeamButtons component is exported so that it can be used in OurTeam component(parent component)
export default TeamButtons;
