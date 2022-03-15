import React from 'react';
import { motion } from 'framer-motion';
import BackDrop from './BackDrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type Props = {
  handleClose: () => void;
};

const dropIn: any = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transform: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = ({ handleClose }: Props) => {
  return (
    <BackDrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className='modal'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <button
          onClick={handleClose}
          className='absolute top-5 right-5'
        >
          <FontAwesomeIcon icon={faClose} size='2x' />
        </button>
        <p className="text-2xl font-semibold mb-4 text-primary">Add New</p>
        <button className='w-60 py-3 rounded-full bg-violet-300 mb-2 border-violet-500 border-2'>
          <Link href='/new/job'>
            <p className='text-lg font-semibold'>Job</p>
          </Link>
        </button>
        <button className='w-60 py-3 rounded-full bg-violet-300 mb-2 border-violet-500 border-2'>
          <Link href='/new/system'>
            <p className='text-lg font-semibold'>Termite system</p>
          </Link>
        </button>
        <button className='w-60 py-3 rounded-full bg-violet-300 mb-2 border-violet-500 border-2'>
          <Link href='/new/quote'>
            <p className='text-lg font-semibold'>Quote</p>
          </Link>
        </button>
        <button className='w-60 py-3 rounded-full bg-violet-300 mb-2 border-violet-500 border-2'>
          <Link href='/new/item'>
            <p className='text-lg font-semibold'>Stock Item</p>
          </Link>
        </button>
        <button className='w-60 py-3 rounded-full bg-violet-300 mb-2 border-violet-500 border-2'>
          <Link href='/new/customer'>
            <p className='text-lg font-semibold'>Customer</p>
          </Link>
        </button>
      </motion.div>
    </BackDrop>
  );
};

export default Modal;
