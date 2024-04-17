import axios from 'axios';

export const tableFetcher = (url) => {
  return axios.get(url).then((response) => response.data);
};
