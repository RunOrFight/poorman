const userString = localStorage.getItem('user');

let user = null;
if (userString) {
  try {
    user = JSON.parse(userString);
  } catch (error) {
    localStorage.removeItem('user');
  }
}

export const AuthState = user
  ? {
      isAuthorized: true,
      isError: false,
      user,
      signedUp: false,
    }
  : {
      isAuthorized: false,
      isError: false,
      user: null,
      signedUp: false,
    };
