const Card = ({ name, src, title, department }) => {
  // Card component returns a card of each team member
  return (
    <div className="bg-inherit  hover:bg-gray-600 hover:bg-opacity-10 h-80 w-56 mx-4 rounded-xl flex justify-center items-center flex-col uppercase cursor-pointer text-center">
      {/* Image element displays the team member's avatar */}
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt={`${name}'s avatar `}
        className=" rounded-full w-44 h-44 mb-5 object-cover"
      ></img>
      {/* h3 element displays the team member's name */}
      <h3 className="text-xl">{name}</h3>
      {/* div element displays the team member's title and department */}
      <div className="" style={{ color: "#3CAB5A" }}>
        {/* p element displays the team member's title */}
        <p>
          {title}
          {department!="Super Core"?(<p>({department})</p>):(<span></span>)}
        </p>
      
      </div>
    </div>
  );
};

// Card component is exported so it can be used in TeamList component(parent component)
export default Card;
