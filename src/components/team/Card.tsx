import type { FC } from 'react';

interface Props {
  name: string;
  imgUrl: string;
  designation: string;
  department: string;
}

const Card: FC<Props> = ({ name, imgUrl, department, designation }) => {
  return (
    <div className="flex w-48 flex-col items-center font-medium uppercase">
      <img
        className="mb-5 h-48 w-48 rounded-full object-cover"
        src={imgUrl}
        alt={`${name}'s avatar`}
      />
      <span className="mb-1 text-center text-xl tracking-wide">{name}</span>
      <span className="mx-5 text-center text-gdsc-green">
        {designation} {department !== 'Super Core' && `(${department})`}
      </span>
    </div>
  );
};

export default Card;
