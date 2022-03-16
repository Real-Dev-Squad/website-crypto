import React, { useState } from 'react';
import fetchData from './fetchData';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const fetchSelfDetails = async () => {
  const [apiResponse, setApiResponse] = useState(undefined);
  if (apiResponse) {
    return apiResponse;
  }
  const userData = await fetchData(`${BASE_API_URL}/users/self`, 'GET', {
    credentials: 'include',
  });
  setApiResponse(userData);
  return userData;
};

export default fetchSelfDetails;
