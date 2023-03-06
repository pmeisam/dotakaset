// import axios from "axios";
const BASE_URL = `/dotakaset-a3880/us-central1/api/files`;

const createFile = (form) => {
  return fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(form),
  }).then((res) => {
    if (res.status !== 500) return res.json().then((data) => data);
  });
};

export default {
  createFile,
};
