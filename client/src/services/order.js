import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020/',
  withCredentials: true
});

export const createOrder = body => {
  console.log('running');
  return api.post('/order', body).then(res => {
    console.log('hey there', res.data);
    return res.data.newOrder;
  });
};
