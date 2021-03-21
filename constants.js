const BASE_IMAGE_URL =
  'https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members';

const BASE_API_URL = 'http://localhost:3001';
// const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const WALLET_URL = `${BASE_API_URL}/wallet`;
const CURRENCIES = {
  NEELAM: 'neelam',
  DINERO: 'dinero',
};

export { BASE_IMAGE_URL, BASE_API_URL, WALLET_URL, CURRENCIES };
