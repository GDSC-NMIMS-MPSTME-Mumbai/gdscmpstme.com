

const SearchMember = ({ member, setMember,setBtn,btn }) => {


   
  return (
    <div className=" w-3/4 h-12 md:w-1/4 mt-8 mb-12 rounded-full bg-white flex border-2 border-black ">
      <input
        type="search"
        value={member}
        onChange={(event) => {
          setBtn({ ...btn, activeDepartment: "All" })
          setMember(event.target.value)
      
         
        }}
      
        placeholder="Search..."
        className="w-5/6 my-2 ml-3 outline-none"
      />

      <div className="mt-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 11.1619H11.71L11.43 10.888C12.41 9.73119 13 8.2294 13 6.5957C13 2.95284 10.09 0 6.5 0C2.91 0 0 2.95284 0 6.5957C0 10.2386 2.91 13.1914 6.5 13.1914C8.11 13.1914 9.58999 12.5927 10.73 11.5983L11 11.8824V12.684L16 17.7475L17.49 16.2356L12.5 11.1619ZM6.5 11.1619C4.01 11.1619 2 9.12236 2 6.5957C2 4.06904 4.01 2.02945 6.5 2.02945C8.99 2.02945 11 4.06904 11 6.5957C11 9.12236 8.99 11.1619 6.5 11.1619Z"
            fill="#868686"
          />
        </svg>
      </div>
    </div>
  );
};

//SearchMember component is exported so that it can be used in OurTeam component(parent component)
export default SearchMember;
