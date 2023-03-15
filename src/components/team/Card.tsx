import type { FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  imgUrl: string;
  designation: string;
  department: string;
}

const Card: FC<Props> = ({ name, imgUrl, department, designation }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center w-48 uppercase font-medium"
    >
      <img
        className="w-48 h-48 object-cover rounded-full mb-5"
        src={imgUrl}
        alt={`${name}'s avatar`}
      />
      <span className="text-center text-xl tracking-wide mb-1">{name}</span>
      <span className="text-center text-gdsc-green mx-5">
        {designation} {department !== 'Super Core' && `(${department})`}
      </span>
    </motion.div>
  );
};

export default Card;
