import fetch from 'isomorphic-unfetch';
import * as headers from './base';
import * as urls from '../config';

const get = async (postId, token) => {
  let headersObj = headers.json();
  if (token) headersObj = { ...headersObj, ...headers.auth(token) };
  const res = await fetch(urls.post(postId), { headers: headersObj });
  const post = await res.json();
  return post;
};

export {
  get,
};
