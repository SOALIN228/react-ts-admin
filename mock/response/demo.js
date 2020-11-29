const Mock = require('mockjs');

const postTest = obj => {
  const Random = Mock.Random;
  // console.log('obj', obj);
  const template = {
    'str|2-4': 'string',
    email: Mock.mock('@email'),
    date: Random.now('hour'),
  };

  return Mock.mock({ status: 200, data: template, message: 'success' });
};

const getTest = obj => {
  return Mock.mock({ status: 200, data: obj, message: 'success' });
};

module.exports = {
  postTest,
  getTest,
};
