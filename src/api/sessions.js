import fetch from 'isomorphic-unfetch';
import * as urls from '../config';
// import cookie from 'js-cookie'
import * as headers from './base';

export const signIn = async (email, password) => {
  const headersObj = {...headers.login(email, password), ...headers.json()};
  const opts = {
    method: 'POST',
    headers: headersObj,
  };
  let apiToken;
  let currentUser;

  const resp = await fetch(urls.login, opts);
  if (resp.status === 201) {
    const body = await resp.json();
    currentUser = body['toker/user'];
    let authHeader = resp.headers.get('Authorization');
    if (authHeader && authHeader.includes('Token ')) {
      apiToken = authHeader.replace('Token ', '');
      // cookie.set('token', apiToken, { expires: 1 })
    }
  }

  return [currentUser, apiToken];
};

export const signInWithToken = async (token) => {
  let headersObj = {...headers.auth(token), ...headers.json()};
  let opts = {
    method: 'PUT',
    headers: headersObj,
  };
  let apiToken;
  let currentUser;

  const resp = await fetch(urls.login, opts);
  if (resp.status === 200) {
    const body = await resp.json();
    currentUser = body['toker/user'];
    let authHeader = resp.headers.get('Authorization');
    if (authHeader && authHeader.includes('Token ')) {
      apiToken = authHeader.replace('Token ', '');
      // cookie.set('token', apiToken, { expires: 1 })
    }
  }

  return [currentUser, apiToken];
};

export const logout = async (token) => {
  let headersObj = {...headers.auth(token), ...headers.json()};
  let opts = {
    method: 'DELETE',
    headers: headersObj,
  };
  const resp = await fetch(urls.logout, opts);
  // cookie.remove('token')
  return resp;
};
