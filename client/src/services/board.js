import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020/',
  withCredentials: true
});

export const addBoard = body => {
  const formBody = new window.FormData();
  formBody.append('name', body.name);
  formBody.append('description', body.description);
  return api.post('/board', formBody).then(response => response.data);
};

// const listPosts = () =>
//   new Promise((resolve, reject) => {
//     api
//       .get('/post/list')
//       .then(response => {
//         const data = response.data;
//         resolve(data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });

//export const listPosts = () => api.get('/post/list').then(response => response.data);

// export const createPost = body => api.post('/post', body).then(response => response.data);
