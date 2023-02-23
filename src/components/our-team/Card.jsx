const Card = ({ name, src, title, department }) => {
  // Card component returns a card of each team member
  return (
    <div className="h-80 w-56 mx-4 rounded-xl flex justify-center items-center flex-col uppercase text-center">
      {/* Image element displays the team member's avatar */}
      <img
        src={src}
        alt={`${name}'s avatar `}
        className=" rounded-full w-44 h-44 mb-5 object-cover"
      ></img>
      {/* h3 element displays the team member's name */}
      <h3 className="text-xl">{name}</h3>
      {/* div element displays the team member's title and department */}
      <div className="text-gdsc-green">
        {/* p element displays the team member's title */}
        <p>
          {title}
          {/*If the department is supercore the department would not be displayed.Otherwiseit will be displayed */}
          {department != 'Super Core' ? <p>({department})</p> : <span></span>}
        </p>
      </div>
    </div>
  );
};

// Card component is exported so it can be used in TeamList component(parent component)
export default Card;
