const makeFetch = (url, params) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...params,
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });

export const login = (email, password) =>
  makeFetch('api/auth', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    })
  });

export const generations = () =>
  makeFetch('api/pokemon/generations');