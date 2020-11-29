import axios from 'axios';
import { baseURL } from '../config';
import errorInfo from '../content/errorInfo';

const request = axios.create({
  baseURL,
  timeout: 5000,
});

request.interceptors.request.use(config => {
  const Authorization = localStorage.getItem('Authorization');
  // 添加Authorization到header
  config.headers = Authorization
    ? {
        ...config.headers,
        Authorization,
      }
    : config.headers;
  return config;
});

request.interceptors.response.use(
  response => {
    // 请求成功
    if (response.status === 200) {
      // 接口正常
      return response.data || '';
    } else if (Object.keys(errorInfo).includes(response.status.toString())) {
      // 接口出现定义异常
      return Promise.reject(
        new Error(errorInfo[response.status.toString()].msg)
      );
    }
    // 接口出现未知异常
    return Promise.reject(new Error('接口发生未知错误'));
  },
  error => {
    // 请求失败
    return Promise.reject(error);
  }
);

export default request;
