// local storage functions

// to save data to local storage
export const setLogin = (email, password) => {
  let data = { status: true, email };
  localStorage.setItem('login', JSON.stringify(data));
};

// to get item from local storage
export const getLogin = () => {
  const login = localStorage.getItem('login');
  return login;
};

// to remove item from local storage
export const setLogout = () => {
  if (getLogin) {
    localStorage.removeItem('login');
  }
};
