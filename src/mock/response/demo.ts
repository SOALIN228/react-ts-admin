import Mock from 'mockjs';
import { urlParams } from '../../utils/common';

export const postTest = (obj: any) => {
  const params = JSON.parse(obj.body);

  return Mock.mock({
    success: true,
    code: '200',
    message: 'success',
    data: params,
  });
};

export const getTest = (obj: any) => {
  const Random = Mock.Random;
  console.log('obj', obj);
  const params = urlParams({ href: obj.url });
  return Mock.mock({
    success: true,
    code: '200',
    message: 'success',
    data: params,
  });
};
