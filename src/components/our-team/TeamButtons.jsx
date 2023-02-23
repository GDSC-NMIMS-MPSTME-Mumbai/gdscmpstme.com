const TeamButtons = ({
  setDepartmentBtn,
  setMembers,
  setTeam,
  departmentBtn,
  OurTeamData,
}) => {
  const teamFilter = name => {
    if (name == 'All') {
      // Set the active department to "All"
      setDepartmentBtn({ ...departmentBtn, activeDepartment: 'All' });
      // Clear the team name
      setTeam('');
      // Set the members to the full list of team members
      setMembers(OurTeamData);
    } else {
      // Set the active department to the selected department
      setDepartmentBtn({ ...departmentBtn, activeDepartment: name });
      // Set the team name to the selected department
      setTeam(name);
      // Filter the list of team members by the selected department
      const filteredData = OurTeamData.filter(
        element => element.department.trim() === name.trim(),
      );
      // Set the members to the filtered list of team members
      setMembers(filteredData);
    }
  };
  // Function to determine the color styles of the button for a given department
  const toggleBtnColorStyles = index => {
    return departmentBtn.departments[index].name ===
      departmentBtn.activeDepartment
      ? 'bg-gdsc-yellow text-white'
      : 'bg-transparent text-black';
  };

  return (
    <div className="flex scrollbar px-8 scrollbar-track-gdsc-yellow md:flex-wrap md:overflow-hidden md:justify-center mx-20 my-2 uppercase max-w-full">
      {departmentBtn.departments.map((department, index) => {
        return (
          <button
            onClick={() => {
              teamFilter(department.name);
            }}
            className={`whitespace-nowrap  ${toggleBtnColorStyles(
              index,
            )}  uppercase rounded-3xl border-2 py-2 px-4 mb-6  w-fit fw-400  border-gdsc-yellow mx-2 md:border-transparent hover:border-gdsc-yellow md:mb-2 `}
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
