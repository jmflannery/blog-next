const protocol = 'http';
const host = 'api.jackflannery.me';
const baseApi = `${protocol}://${host}`

const posts = `${baseApi}/posts`
const login = `${baseApi}/login`
const logout = `${baseApi}/logout`

export {
  posts,
  login,
  logout,
}
