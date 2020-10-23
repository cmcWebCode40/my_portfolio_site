import axios from 'axios';

const coopLangApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/api`,
  responseType: 'json',
});

export { coopLangApi };
