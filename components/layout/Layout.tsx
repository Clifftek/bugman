import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import Nav from '../navigation/Nav';
import Image from 'next/image';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div>
        <ErrorMessage />
      </div>
    );

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
      <div className='flex h-[100vh] w-full flex-col items-center pt-48 overflow-auto bg-neutral-300 p-2 lg:mt-24'>
      <Image
          src='/icon-512x512.png'
          alt='bugman logo'
          className=''
          height='100px'
          width='120px'
        />
        <p className='text-primary display-font tracking-wider my-6 text-center text-5xl font-semibold'>
          Welcome to the Bugman employee App
        </p>
        <div className=''>
          <a
            href='/api/auth/login'
            className='block w-60 rounded-full border-2 border-violet-500 bg-violet-300 p-4 text-center text-xl font-semibold'
          >
            Log in
          </a>
        </div>
      </div>
    </>
  );
};

export default Layout;
