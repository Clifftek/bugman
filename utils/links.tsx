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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />,
  },
  {
    name: 'Quotes',
    slug: 'quotes',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} size='xl'/>,
  },
  {
    name: 'Stock Manager',
    slug: 'stock-manager',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    icon: <FontAwesomeIcon icon={faBoxesStacked} size='xl' />,
  },
];

export default links;
