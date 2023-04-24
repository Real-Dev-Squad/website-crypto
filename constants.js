const BASE_IMAGE_URL =
  'https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const USER_DATA_URL = `${BASE_API_URL}/users/self`;
const WALLET_URL = `${BASE_API_URL}/wallet`;

const CURRENCIES = {
  NEELAM: 'neelam',
  DINERO: 'dinero',
};

const PATHS = {
  HOME: 'https://www.realdevsquad.com',
  PROFILE: 'https://my.realdevsquad.com/',
};

const NAV_MENU = [
  {
    name: 'Home',
    url: 'https://www.realdevsquad.com/',
    isActive: false,
  },
  {
    name: 'Welcome',
    url: 'https://welcome.realdevsquad.com/',
    isActive: false,
  },
  {
    name: 'Events',
    url: 'http://realdevsquad.com/events.html',
    isActive: false,
  },
  {
    name: 'Members',
    url: 'https://members.realdevsquad.com/',
    isActive: false,
  },
  {
    name: 'Crypto',
    url: 'https://crypto.realdevsquad.com/',
    isActive: true,
  },
  {
    name: 'Status',
    url: 'https://status.realdevsquad.com/',
    isActive: false,
  },
];

const LOGIN_URL =
  'https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97';

export {
  BASE_IMAGE_URL,
  BASE_API_URL,
  USER_DATA_URL,
  WALLET_URL,
  CURRENCIES,
  LOGIN_URL,
  PATHS,
  NAV_MENU,
};
