import React from 'react';
import Header from '../header/Header';

type Props = {
  children: any;
};

const Layout = ({children}: Props) => {
  return (
    <div className='color-primary h-[100vh]'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;