const makeFetch = (url, params) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...params,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    });

export const login = (email, password) =>
  makeFetch('api/auth', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    })
  });

export const checkSession = () =>
  makeFetch('api/auth/me', {
    method: 'GET'
  });

export const generations = () =>
  makeFetch('api/pokemon/generations');