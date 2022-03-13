import { homeIcon, quote, search, stock, termites } from '.';

const links = [
  {
    name: 'Home',
    slug: '',
    icon: () => (
      <svg
        viewBox='0 0 330.242 330.242'
        className='h-5 w-5 fill-green-500 stroke-green-500 stroke-2'
        fill='currentcolor'
        stroke='currentColor'
      >
        {homeIcon()}
      </svg>
    ),
  },
  {
    name: 'Termite Systems',
    slug: 'systems',
    icon: () => {
      return (
        <svg
          viewBox='0 0 36 36'
          className='h-5 w-5 fill-green-500 stroke-green-500 stroke-2'
          fill='currentcolor'
          stroke='currentColor'
        >
          {termites()}
        </svg>
      );
    },
  },
  {
    name: 'search',
    slug: 'search',
    icon: () => (
      <svg
        viewBox='0 0 500 500'
        className='h-5 w-5 fill-green-500 stroke-green-500 stroke-[5px]'
        fill='currentcolor'
        stroke='currentColor'
      >
        {search()}
      </svg>
    ),
  },
  {
    name: 'Quotes',
    slug: 'quotes',
    icon: () => (
      <svg
        viewBox='0 0 512 512'
        className='h-5 w-5 fill-green-500 stroke-green-500 stroke-2'
        fill='currentcolor'
        stroke='currentColor'
      >
        {quote()}
      </svg>
    ),
  },
  {
    name: 'Stock Manager',
    slug: 'stock-manager',
    icon: () => (
      <svg
        viewBox='0 0 512 512'
        className='h-5 w-5 fill-green-500 stroke-green-500 stroke-2'
        fill='currentcolor'
        stroke='currentColor'
      >
        {stock()}
      </svg>
    ),
  },
];

export default links;
