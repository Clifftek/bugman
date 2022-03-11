import Link from 'next/link';
import React, { useState } from 'react';
import { hamburgerMenuSVG } from '../../utils';

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const expandMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mb-2 w-full px-4 lg:mx-auto lg:px-24 lg:py-2">
      <div className="inline-block w-full border-b-2 border-green-500 py-2 lg:py-6">
        <div className="mb-2 flex items-center justify-between lg:float-left lg:mb-2">
          <Link key="brand" href="/">
            <span className="display-font cursor-pointer text-6xl text-primary">
              1300 Bugman
            </span>
          </Link>
          <div className="lg:hidden text-primary">
            <button onClick={expandMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 384.97 384.97"
                xmlSpace="preserve"
                className='h-8 w-8 cursor-pointer'
                fill='currentColor'
                stroke='currentColor'
              >
                {hamburgerMenuSVG()}
              </svg>
            </button>
            {clicked && (
              <div className="color-primary absolute top-0 right-0 z-10 flex h-full w-full flex-col-reverse justify-center">
                <p
                  className="text-secondary absolute -top-3 right-5 cursor-pointer text-[4rem]"
                  onClick={expandMenu}
                >
                  &times;
                </p>

                {links.map((link) => (
                  <>
                    <div className="text-secondary mb-4 text-center text-5xl tracking-wider">
                      <Link
                        key={link.slug}
                        href={`/${link.slug}`}
                        passHref={true}
                      >
                        <span
                          className="display-font cursor-pointer underline"
                          onClick={expandMenu}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:float-right lg:flex lg:flex-row">
          {links.reverse().map((link) => (
            <div key={link.slug} className="">
              <Link key={link.slug} href={`/${link.slug}`} passHref={true}>
                <span className="display-font text-secondary ml-8 block cursor-pointer tracking-wide lg:mt-4 lg:align-middle lg:text-3xl">
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

const links = [
  { name: 'Termite Systems', slug: 'systems' },
  { name: 'Quotes', slug: 'quotes' },
  { name: 'Stock Manager', slug: 'stock-manager' },
  { name: 'Customers', slug: 'customers' },
];