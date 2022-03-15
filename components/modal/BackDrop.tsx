import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  onClick: () => void;
  children: any;
}

const BackDrop = ({ children, onClick }: Props) => {
  return (
    <motion.div
      className='backDrop'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
