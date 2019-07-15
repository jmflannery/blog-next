import fetch from 'isomorphic-unfetch';

const get = async () => {
  const res = await fetch('http://api.jackflannery.me/posts');
  const posts = await res.json();
  return posts;
};

export {
  get,
};
