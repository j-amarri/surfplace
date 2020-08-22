import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020/',
  withCredentials: true
});

export const addBoard = body =>
  api.post('/post', body).then(response => response.data);

// export const addBoard = body => {
//   // const formBody = new window.FormData();
//   // formBody.append('name', body.name);
//   // formBody.append('description', body.description);
//   const { name, description } = body;
//   return api
//     .post('/board', { name, description })
//     .then(response => response.data);
// };

export const listBoards = () =>
  api.get('/board/list').then(response => response.data);

export const loadBoard = id =>
  api.get(`/board/${id}`).then(response => response.data);

export const deleteBoard = id =>
  api.delete(`/board/${id}`).then(response => response.data);

export const editBoard = (id, body) =>
  api.patch(`/board/${id}`, body).then(response => response.data);
