// api.js
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
//   baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Add a request interceptor to include the token in the headers
// apiClient.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem('token'); // Assuming you're using AsyncStorage to store the token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

//basic examples

// export const postData = async data => {
//   const response = await apiClient.post('/data', data);
//   return response.data;
// };

// export const putData = async (id, data) => {
//   const response = await apiClient.put(`/data/${id}`, data);
//   return response.data;
// };

// export const deleteData = async id => {
//   const response = await apiClient.delete(`/data/${id}`);
//   return response.data;
// };
