import axios from 'axios';

export const userServiceApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TASK_BOARD_BACKEND_API_BASE_URL, 
  withCredentials: true, 
});

