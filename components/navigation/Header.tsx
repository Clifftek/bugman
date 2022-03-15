import {
  faArrowRightFromBracket,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../modal/Modal';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className='color-primary sticky-top flex w-full items-center justify-between p-3'>
      <a
        href='/api/auth/logout'
        className='text-indigo-200 pl-1 text-xl font-semibold'
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} size='lg' />
      </a>
      <Image
        src='/icon-192x192.png'
        alt='bugman logo'
        height='38px'
        width='43px'
      />
      <motion.button
        onClick={() => (modalOpen ? close() : open())}
        type='button'
        className='text-indigo-200 text-3xl font-semibold'
      >
        <FontAwesomeIcon icon={faPlus} />
      </motion.button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
