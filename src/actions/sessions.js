import nextCookie from 'next-cookies';
import * as api from '../api/api';

export const LOGGED_IN = 'LOGGED_IN';

const loggedIn = (currentUser, token) => ({
  type: LOGGED_IN,
  currentUser,
  token,
});

export const login = async (email, password) => {
  return await api.sessions.signIn(email, password);
};

export const loginWithToken = async (ctx) => {
  const { token } = nextCookie(ctx);
  let currentUser; let nextToken;

  if (token) {
    [currentUser, nextToken] = await api.sessions.signInWithToken(token);
    return [currentUser, nextToken]
  }
  return [];
};

export const logout = async (token) => {
  return await api.sessions.logout(token);
};
