import axios from '../utils/request';

interface UserInfo {
  str: string;
  date: string;
  email: string;
}

export const postTest = (params: {} = {}) => {
  return axios
    .request<any, UserInfo | void>({
      url: '/mock/postTest',
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

export const getTest = (params: any = {}) => {
  return axios
    .request<any, UserInfo | void>({
      url: '/mock/getTest',
      method: 'get',
      params: {
        id: params.id,
        name: params.name,
      },
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.error('err', error);
    });
};
