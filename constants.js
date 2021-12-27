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
  WELCOME: 'https://welcome.realdevsquad.com/',
  EVENTS: 'https://www.realdevsquad.com/events.html',
  MEMBERS: 'https://members.realdevsquad.com/',
  CRYPTO: 'https://crypto.realdevsquad.com/',
  STATUS: 'https://status.realdevsquad.com/',
};
const LOGIN_URL =
  'https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97';
const USER_PROFILE_URL = 'https://my.realdevsquad.com/profile';
export {
  BASE_IMAGE_URL,
  BASE_API_URL,
  USER_DATA_URL,
  WALLET_URL,
  CURRENCIES,
  LOGIN_URL,
  USER_PROFILE_URL,
  PATHS,
};
