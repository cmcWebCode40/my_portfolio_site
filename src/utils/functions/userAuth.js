import Cookies from 'universal-cookie';

const cookies = new Cookies();

/**
 * PLATFORM ROLES...
 */

const FAIR_ADMIN = 'Fair-Admin';
const PLATFORM_ADMIN = 'Admin';
const USER = 'user';

/**
 * GET ALL USER DATA FROM BROWSER STORAGE***
 */

const getUserToken = () => {
  const token = cookies.get('vcn_usr:auth', { path: '/' });
  if (token) {
    return {
      Authorization: `Bearer ${token}`
    };
  }
  return null;
};

const getUserData = (info) => {
  if (localStorage.getItem('__active:user')) {
    try {
      const userID = JSON.parse(localStorage.getItem('__active:user'));
      return userID[info];
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

const clearUserBrowserStore = () => {
  localStorage.removeItem('__active:user');
  cookies.remove('vcn_usr:auth');
};

/**
 *
 * SAVE VCN USER DATA IN BROWSER STORAGE....
 */

const saveUserDetails = (newUser) => {
  const currentUser = {};
  currentUser.id = newUser._id;
  currentUser.firstname = newUser.firstname;
  currentUser.lastname = newUser.lastname;
  currentUser.email = newUser.email;
  currentUser.username = newUser.username;
  currentUser.role = newUser.role;
  localStorage.setItem('__active:user', JSON.stringify(currentUser));
};

const saveAuthToken = (token) => {
  cookies.set('vcn_usr:auth', `${token}`, { path: '/' });
};

export {
  FAIR_ADMIN,
  PLATFORM_ADMIN,
  USER,
  getUserToken,
  getUserData,
  clearUserBrowserStore,
  saveUserDetails,
  saveAuthToken,
};
