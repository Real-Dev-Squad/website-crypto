import axios from 'axios';
import BASE_URL from '../../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const makeRequest = (requestDetails) => {
  const {
    method,
    url,
    responseType = 'json',
    headers = {},
    data = {},
    params = {},
  } = requestDetails;
  const paramString = new URLSearchParams(params);
  try {
    const response = axiosInstance.request(url + paramString, data, {
      responseType,
      method,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
