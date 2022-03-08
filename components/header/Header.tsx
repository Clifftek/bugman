/* eslint-disable max-len */
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const expandMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mb-2 w-full color-primary px-4 lg:mx-auto lg:px-24 lg:py-2">
      <div className="inline-block w-full border-b-2 border-white py-2 lg:py-6">
        <div className="mb-2 flex items-center justify-between lg:float-left lg:mb-2">
          <Link key="brand" href="/" passHref={true}>
            <span className="display-font cursor-pointer text-6xl text-secondary">
              Bugman
            </span>
          </Link>
          <div className="lg:hidden text-secondary">
            <button onClick={expandMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 384.97 384.97"
                xmlSpace="preserve"
                className='h-9 w-9 cursor-pointer'
                fill='currentColor'
                stroke='currentColor'
              >
                <g>
                  <g id="Menu" >
                    <path strokeWidth='5' d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			                        C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>
                    <path strokeWidth='5' d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			                        S379.58,180.455,372.939,180.455z"/>
                    <path strokeWidth='5' d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			                        c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>
                  </g>
                </g>
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
  { name: 'Jobs', slug: 'jobs' },
  { name: 'Termite Systems', slug: 'systems' },
  { name: 'Customers', slug: 'customers' },
  { name: 'Contact', slug: 'contact' },
];