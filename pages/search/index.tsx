import React, { useState } from 'react';
import Image from 'next/image';

const SearchPage = () => {
  const [term, setTerm] = useState<string>('');

  return (
    <div className='bg-neutral-300'>
      <div className='color-primary px-6 fixed top-0 left-0 flex h-16 w-full items-center'>
        <Image
          src='/icon-192x192.png'
          alt='bugman logo'
          className=''
          height='38px'
          width='43px'
        />
        <input
          type='text'
          name=''
          id=''
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search...'
          className='text-secondary mx-auto w-[75%] rounded-full bg-violet-500 p-1 pl-4 font-semibold placeholder:font-normal placeholder:italic focus:outline-none focus:ring focus:ring-violet-300'
        />
      </div>
      <div></div>
    </div>
  );
};

export default SearchPage;
