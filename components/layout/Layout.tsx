import React from 'react';
import Header from '../header/Header';

type Props = {
  children: any;
};

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;