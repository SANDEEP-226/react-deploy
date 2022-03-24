import axios from 'axios';

export const getStrapiData = (urlQuery) => {
  const url = 'http://localhost:1337/api/hey-himalayas/1?' + urlQuery;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
