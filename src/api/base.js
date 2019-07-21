export const login = (email, password) => ({
  Authorization: "Basic " + btoa(`${email}:${password}`)
});

export const auth = (token) => ({
  Authorization: `Token ${token}`
});

export const json = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});
