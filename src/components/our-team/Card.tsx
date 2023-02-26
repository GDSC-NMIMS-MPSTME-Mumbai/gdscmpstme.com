import { FC } from 'react';

interface Props {
  name: string;
  src: string;
  designation: string;
  department: string;
}

const Card: FC<Props> = ({ name, src, designation, department }) => {
  return (
    <div className="h-80 w-56 mx-4 rounded-xl flex justify-center items-center flex-col uppercase text-center">
      <img
        src={src}
        alt={`${name}'s avatar `}
        className=" rounded-full w-44 h-44 mb-5 object-cover"
      ></img>
      <h3 className="text-xl">{name}</h3>
      <div className="text-gdsc-green">
        <p>
          {designation}
          {department != 'Super Core' ? <p>({department})</p> : <span></span>}
        </p>
      </div>
    </div>
  );
};

export default Card;
