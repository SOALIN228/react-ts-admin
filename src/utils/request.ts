/**
 * axios 请求封装，处理响应拦截和请求拦截，通用错误码处理
 */
import axios from 'axios';
import { baseURL } from '../config';

interface ReqData {
  success: boolean;
  code: string;
  message: string;
  data: any;
}

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
    console.log('response', response);
    const resp = response.data as ReqData;
    // 请求成功
    if (response.status >= 200 && response.status < 300) {
      if (resp.success && resp.code === '200') {
        return resp.data;
      }
    }

    return Promise.reject(new Error(resp.message || '接口出现未定义异常'));
  },
  error => {
    // 请求失败
    return Promise.reject(error);
  }
);

export default request;
