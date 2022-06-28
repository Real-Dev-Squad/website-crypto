const setCookie = (name, value, days) => {
  const domain = '.realdevsquad.com';
  const expires = new Date(
    Date.now() + 24 * days * 60 * 60 * 1000
  ).toUTCString();
  const encodeValue = encodeURIComponent(value);
  const cookieStr = `${name}=${encodeValue}; expires=${expires}; domain=${domain}; path=/`;
  document.cookie = cookieStr;
};

const getCookie = (cookieName) => {
  const name = `${cookieName}=`;
  const allCookieArray = document.cookie.split(';');
  for (let i = 0; i < allCookieArray.length; i += 1) {
    const temp = allCookieArray[i].trim();
    if (temp.indexOf(name) === 0)
      return decodeURIComponent(temp.substring(name.length, temp.length));
  }
  return '';
};

export { setCookie, getCookie };
