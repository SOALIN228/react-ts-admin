import Mock from 'mockjs';
import { urlParams } from '../../utils/common';

export const postTest = (obj: any) => {
  const Random = Mock.Random;

  const template = {
    'str|2-4': 'string',
    email: Mock.mock('@email'),
    date: Random.now('hour'),
  };

  return Mock.mock(template);
};

export const getTest = (obj: any) => {
  const Random = Mock.Random;
  console.log('obj', obj);
  const params = urlParams({ href: obj.url });
  return Mock.mock(params);
};
