import axios from "axios";

const server = axios.create({
  baseURL: "https://mock.apifox.cn/m1/1419713-0-default",
  timeout: 3000,
});

function get(url, params) {
  return new Promise((resolve, reject) => {
    server
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function post(url, params) {
  return new Promise((resolve, reject) => {
    server
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  get,
  post,
};
