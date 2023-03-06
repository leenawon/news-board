import { fetch } from "whatwg-fetch";

export const fetchData = (path) => {
  return fetch(path)
    .then((res) => res.json())
    .then((data) => data);
};
