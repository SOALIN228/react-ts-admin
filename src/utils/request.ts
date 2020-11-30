/**
 * axios 请求封装，处理响应拦截和请求拦截，通用错误码处理
 */
import axios from 'axios';
import { baseURL } from '../config';
import errorInfo from '../content/errorInfo';

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
    // 请求成功
    if (response.status >= 200 && response.status < 300) {
      const resp = response.data as ReqData;
      if (resp.success && resp.code === '200') {
        // 正常情况
        return resp.data;
      } else if (Object.keys(errorInfo).includes(resp.code)) {
        // 接口出现已定义异常
        return Promise.reject(new Error(errorInfo[resp.code].msg));
      }
      // 接口出现未定义异常
      return Promise.reject(new Error(resp.message || '接口出现未定义异常'));
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
