import {
  faBoxesStacked,
  faFileInvoiceDollar,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TermiteIcon from './termites';


const links = [
  {
    name: 'Home',
    slug: '',
    icon: <FontAwesomeIcon icon={faHouse} size='xl' />,
  },
  {
    name: 'Termite Systems',
    slug: 'systems',
    icon: (
      <svg
        viewBox='0 0 36 36'
        className='fill-green-500 stroke-green-500'
        height='24px'
        width='24px'
        fill='currentcolor'
        stroke='currentColor'
      >
        {TermiteIcon()}
      </svg>
    ),
  },
  {
    name: 'search',
    slug: 'search',
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />,
  },
  {
    name: 'Quotes',
    slug: 'quotes',
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} size='xl'/>,
  },
  {
    name: 'Stock Manager',
    slug: 'stock-manager',
    icon: <FontAwesomeIcon icon={faBoxesStacked} size='xl' />,
  },
];

export default links;
