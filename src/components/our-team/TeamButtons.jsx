const TeamButtons = ({ setDepartmentBtn, setMembers, setTeam, departmentBtn,OurTeamData }) => {
  const teamFilter = (name, index) => {
    if (name == "All") {
      // Set the active department to "All"
      setDepartmentBtn({ ...departmentBtn, activeDepartment: "All" });
      // Clear the team name
      setTeam("");
      // Set the members to the full list of team members
      setMembers(OurTeamData);
    } else {
      // Set the active department to the selected department
      setDepartmentBtn({ ...departmentBtn, activeDepartment: name });
      // Set the team name to the selected department
      setTeam(name);
      // Filter the list of team members by the selected department
      const filteredData = OurTeamData.filter(
        (element) => element.department.trim() === name.trim()
      );
      // Set the members to the filtered list of team members
      setMembers(filteredData);
    }
  };
  // Function to determine the color styles of the button for a given department
  const toggleBtnColorStyles = (index) => {
    return departmentBtn.departments[index].name === departmentBtn.activeDepartment
      ? "bg-yellow-400 text-white"
      : "bg-transparent text-black";
  };

  return (
    <div className="flex scrollbar scrollbar-track-amber-400 md:flex-wrap  md:justify-center my-2 uppercase max-w-full">
      {departmentBtn.departments.map((department, index) => {
        return (
          <button
            onClick={() => {
              teamFilter(department.name, index);
            }}
            className={`whitespace-nowrap ${toggleBtnColorStyles(index)}  uppercase rounded-3xl border-2 py-2 px-4 mb-6  w-fit fw-400  border-yellow-300 mx-2 md:border-transparent hover:border-yellow-300 md:mb-2 `}
            key={department.name}
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
