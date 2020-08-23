import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020/',
  withCredentials: true
});

export const addBoard = body => {
  const formBody = new window.FormData();
  for (let property in body) formBody.append(property, body[property]);
  return api.post('/board', formBody).then(response => response.data);
};

export const listBoards = () =>
  api.get('/board/list').then(response => response.data);

export const loadBoard = id =>
  api.get(`/board/${id}`).then(response => response.data);

export const deleteBoard = id =>
  api.delete(`/board/${id}`).then(response => response.data);

export const editBoard = (id, body) =>
  api.patch(`/board/${id}`, body).then(response => response.data);
