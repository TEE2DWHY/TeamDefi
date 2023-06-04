export const isLoggedIn = (isLoggedIn, bool) => {
  sessionStorage.setItem(isLoggedIn, bool);
};
