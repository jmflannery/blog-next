const protocol = 'http';
const domain = 'api.jackflannery.com';
const baseUrl = `${protocol}://${domain}`;

const posts = `${baseUrl}/posts?type=list`;
const post = (postId) => `${baseUrl}/posts/${postId}`;
const publishPost = (postId) => `${baseUrl}/posts/${postId}/publish`;
const login = `${baseUrl}/login`;
const logout = `${baseUrl}/logout`;

export {posts, post, publishPost, login, logout};
