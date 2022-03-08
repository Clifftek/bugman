import React from 'react';
import Header from '../header/Header';

type Props = {
  children: any;
};

const Layout = ({children}: Props) => {
  return (
    <div className='color-primary'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;