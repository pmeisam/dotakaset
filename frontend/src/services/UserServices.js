const BASE_URL = `/dotakaset-a3880/us-central1/api/users`;

const getUserByEntityId = (userEntityId) => {
  return fetch(`${BASE_URL}/userEntity/${userEntityId}`, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
  })
    .then((res) => {
      if (res.status === 500) return res.json()
      if (res.status !== 401) return res.json().then((data) => data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUserEntity = (form) => {
  return fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(form),
  }).then((res) => {
    if (res.status !== 500) return res.json().then((data) => data);
  });
};

export default {
  getUserByEntityId,
  createUserEntity,
};
