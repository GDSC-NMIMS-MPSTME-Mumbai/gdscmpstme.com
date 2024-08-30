import type { FC } from 'react';
import { activeDepartment } from '../../stores/department';
import { useStore } from '@nanostores/react';
import Card from './Card';
import { AnimatePresence } from 'framer-motion';

interface Props {
  teamMembers: Member[];
}

const TeamSection: FC<Props> = ({ teamMembers }) => {
  const $activeDepartment = useStore(activeDepartment);

  return (
    <section className="relative mx-auto mb-10 flex h-min max-w-screen-2xl flex-wrap justify-center gap-x-12 gap-y-10 overflow-hidden px-5 md:px-52 md:pt-16">
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
        className="absolute top-6 left-[10%] hidden w-24 md:block"
        src="/decorations/contact-person.svg"
        alt=""
      />
    </section>
  );
};

export default TeamSection;
