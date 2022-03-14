import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import Nav from '../navigation/Nav';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loader />;
  if (error) return <div><ErrorMessage /></div>;

  if (user) {
    return (
      <div className='lg:grid lg:gap-8'>
        <div className=''>
          <div className='h-[90vh] overflow-auto lg:mt-24'>{children}</div>
          <Nav />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className='flex h-[90vh] w-full flex-col items-center justify-center overflow-auto bg-neutral-300 p-2 lg:mt-24'>
        <div className=''>
          <button className='mb-2 w-60 rounded-xl border-2 border-violet-500 bg-violet-300 p-4 text-lg font-semibold'>
            Install
          </button>
        </div>
        <div className=''>
          <a href="/api/auth/login" className='block w-60 rounded-xl border-2 border-violet-500 bg-violet-300 p-4 text-lg font-semibold text-center'>
            Log in
          </a>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Layout;
