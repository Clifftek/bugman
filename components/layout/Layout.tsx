import React from 'react';
import Nav from '../navigation/Nav';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='lg:grid lg:gap-8'>
      <div className=''>
        <div className='lg:mt-24 h-[94vh] overflow-auto'>{children}</div>
        <Nav />
      </div>
    </div>
  );
};

export default Layout;
