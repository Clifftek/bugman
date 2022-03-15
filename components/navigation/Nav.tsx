import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { links } from '../../utils';

const Nav = () => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 1000px)`);
    media.addEventListener('change', (e) => updateTarget(e));

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', (e) => updateTarget(e));
  }, [updateTarget]);

  return (
    <div className='color-primary sticky bottom-0 flex h-20 w-full border-t-2 border-indigo-200 lg:border-t-0 lg:fixed lg:top-0 lg:mx-auto lg:mb-8 lg:mt-0'>
      <div className='flex w-full justify-evenly lg:items-center lg:justify-center lg:flex-row'>
        {links.map((link) => (
          <div key={link.slug} className='px-5 pt-3'>
            <Link key={link.slug} href={`/${link.slug}`} passHref={true}>
              <span className='display-font text-indigo-200 lg:p-4 lg:text-3xl'>
                {targetReached ? link.icon : link.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
