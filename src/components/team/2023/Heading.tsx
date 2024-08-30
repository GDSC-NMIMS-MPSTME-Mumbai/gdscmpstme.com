import { FC, useEffect, useRef } from 'react';
import { activeDepartment } from '../../../stores/department';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';

const Heading: FC = () => {
  const $activeDepartment = useStore(activeDepartment);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  const headerForFilter = {
    All: 'Team',
    'Super Core': 'Super Core',
    'Web Dev': 'Web Developers',
    'App Dev': 'App Developers',
    'AI/ML': 'AI Department',
    'Competitive Programming': 'CP Department',
    'UI/UX': 'Design Wizards',
    Photography: 'Photographers',
    'Business Development': 'Biz Devs',
    'Digital Creatives': 'Creative Thinkers',
    'Event Ops': 'Event Maestros',
    'In-House Creatives': 'In-House Artists',
    'Marketing and Communication': 'Marketing Gurus',
  };

  return (
    <h1 className="my-10 mx-4 text-center text-5xl font-bold leading-tight">
      Meet{' '}
      <span className="hidden text-gdsc-blue md:inline">
        {initialRender.current ? (
          'Our Team'
        ) : (
          <>
            Our{' '}
            <span>
              <motion.span
                key={$activeDepartment}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: -10, opacity: 0 }}
                transition={{ ease: 'linear' }}
                className="inline-block"
              >
                {headerForFilter[$activeDepartment]}
              </motion.span>
            </span>
          </>
        )}
      </span>
      <span className="text-gdsc-blue md:hidden">Our Team</span>
    </h1>
  );
};

export default Heading;
