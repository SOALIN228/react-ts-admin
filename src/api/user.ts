import axios from '../utils/request';

interface UserInfo {
  str: string;
  date: string;
  email: string;
}

export const getUserInfo = (params: {} = {}) => {
  return axios
    .request<any, UserInfo | void>({
      url: '/mock/getUserInfo',
      method: 'post',
      data: params,
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.error('err', error);
    });
};
