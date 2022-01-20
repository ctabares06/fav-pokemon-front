const makeFetch = (url, params) =>
  fetch("/api/" + url, {
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
  makeFetch('auth', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    })
  });

export const checkSession = () =>
  makeFetch('auth/me', {
    method: 'GET'
  });

export const generations = () =>
  makeFetch('pokemon/generations');

export const getGeneration = (id) =>
  makeFetch(`pokemon/generations/${id}`);

export const addFavorite = (user_id, pokemon_id) =>
  makeFetch(`users/favorite`, {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      pokemon_id,
    })
  })

export const removeFavorite = (user_id, pokemon_id) =>
  makeFetch(`users/favorite/${user_id}/${pokemon_id}`, {
    method: 'DELETE',
  })