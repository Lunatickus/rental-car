import axios from 'axios';

axios.defaults.baseURL = 'https://65ce0233c715428e8b3fb656.mockapi.io';

export const fetchAll = async page => {
  const resp = await axios.get(`/adverts?page=${page}&limit=12`);
  return resp.data;
};