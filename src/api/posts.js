import fetch from 'isomorphic-unfetch';
import * as headers from './base';
import * as urls from '../config';

const get = async token => {
  let headersObj = headers.json();
  if (token) headersObj = {...headersObj, ...headers.auth(token)};
  const opts = {headers: headersObj};
  const res = await fetch(urls.posts, opts);
  const posts = await res.json();
  return posts;
};

const update = async (postId, post, token) => {
  if (!token) return;
  return fetch(
    urls.post(postId),
    {
      method: 'PUT',
      headers: {...headers.json(), ...headers.auth(token)},
      body: JSON.stringify({post}),
    },
    token
  );
};

const publish = async (postId, token) => {
  if (!token) return;

  const resp = await update(postId, {published_at: new Date()}, token);
  return await resp.json();
};

const unpublish = async (postId, token) => {
  if (!token) return;

  const resp = await update(postId, {published_at: null}, token);
  return await resp.json();
};

const del = async (postId, token) => {
  if (!token) return;
  const opts = {
    method: 'DELETE',
    headers: {...headers.json(), ...headers.auth(token)},
  };
  const res = await fetch(urls.post(postId), opts);
};

export {get, del, update, publish, unpublish};
