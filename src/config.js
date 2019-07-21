const protocol = 'http';
const host = 'api.jackflannery.me';
const baseApi = `${protocol}://${host}`;

const posts = `${baseApi}/posts`;
const post = (postId) => `${baseApi}/posts/${postId}`;
const login = `${baseApi}/login`;
const logout = `${baseApi}/logout`;

export {
  posts,
  post,
  login,
  logout,
};
