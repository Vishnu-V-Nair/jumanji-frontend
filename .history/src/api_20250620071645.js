// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // e.g. https://your-backend.onrender.com/api
  withCredentials: true // if your backend uses cookies/JWT
});

export default API;
