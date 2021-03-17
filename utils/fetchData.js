const fetchData = async (url, method = 'GET', options = null) => {
  const response = await fetch(url, { method, ...options });
  return response;
};

export default fetchData;
