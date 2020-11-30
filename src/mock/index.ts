import Mock from 'mockjs';
import { postTest, getTest } from './response/demo';

// demo
Mock.mock(/\/mock\/postTest/, 'post', postTest);
Mock.mock(/\/mock\/getTest/, 'get', getTest);

Mock.setup({
  // 响应时间为区间随机值
  timeout: '100-600',
});
export default Mock;
