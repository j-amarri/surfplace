import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020/',
  withCredentials: true
});

export const createOrder = body => {
  return api.post('/order', body).then(res => {
    return res.data.newOrder;
  });
};

export const loadOrder = id => {
  return api.get(`/order/${id}`).then(res => {
    console.log(res.data.order);
    return res.data.order;
  });
};

export const listOrders = body => {
  return api.get('/order/list', body).then(res => {
    return res.data;
  });
};
