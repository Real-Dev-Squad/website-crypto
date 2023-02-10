const signOut = () => {
  fetch('https://api.realdevsquad.com/auth/signout', {
    method: 'GET',
    credentials: 'include',
  }).then(() => {
    location.reload();
  });
};

export default signOut;
