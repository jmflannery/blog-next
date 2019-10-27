const protocol = 'http';
const host = 'api.jackflannery.me';
const baseApi = `${protocol}://${host}`;

const posts = `${baseApi}/posts?type=list`;
const post = (postId) => `${baseApi}/posts/${postId}`;
const publishPost = (postId) => `${baseApi}/posts/${postId}/publish`;
const login = `${baseApi}/login`;
const logout = `${baseApi}/logout`;

export {
  posts,
  post,
  publishPost,
  login,
  logout,
};
