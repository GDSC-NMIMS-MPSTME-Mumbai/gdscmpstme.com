import type { FC } from 'react';

interface Props {
  name: string;
  imgUrl: string;
  designation: string;
  department: string;
}

const Card: FC<Props> = ({ name, imgUrl, department, designation }) => {
  return (
    <div className="flex flex-col items-center w-48 uppercase font-medium">
      <img
        className="w-48 h-48 object-cover rounded-full mb-5"
        src={imgUrl}
        alt={`${name}'s avatar`}
      />
      <span className="text-center text-xl tracking-wide mb-1">{name}</span>
      <span className="text-center text-gdsc-green mx-5">
        {designation} {department !== 'Super Core' && `(${department})`}
      </span>
    </div>
  );
};

export default Card;
