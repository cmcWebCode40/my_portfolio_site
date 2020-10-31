import axios from 'axios';

const coopLagApi = axios.create({
  // baseURL: 'https://cooplagfair.herokuapp.com/api/v1',
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/api`,
  responseType: 'json',
});

export { coopLagApi };
