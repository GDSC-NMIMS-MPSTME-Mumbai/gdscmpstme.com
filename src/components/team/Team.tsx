import type { FC } from 'react';
import { activeDepartment } from '../../stores/department';
import { useStore } from '@nanostores/react';
import Card from './Card';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  teamMembers: Member[];
}

const Team: FC<Props> = ({ teamMembers }) => {
  const $activeDepartment = useStore(activeDepartment);

  return (
    <section className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:px-52 max-w-screen-2xl px-5 mx-auto md:pt-16 mb-10 relative h-min overflow-hidden">
      <AnimatePresence initial={false}>
        {teamMembers
          .filter(
            member =>
              $activeDepartment === 'All' ||
              member.department === $activeDepartment,
          )
          .map(member => (
            <Card {...member} key={member.id} />
          ))}
      </AnimatePresence>
      <img
        className="absolute hidden md:block top-6 left-[10%] w-24"
        src="/decorations/contact-person.svg"
        alt=""
      />
    </section>
  );
};

export default Team;
