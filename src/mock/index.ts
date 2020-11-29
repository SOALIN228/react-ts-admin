import Mock from 'mockjs';
import { getUserInfo, login, authorization } from './response/user';
import { getTableData, getFileList, getFolderList } from './response/data';

Mock.mock(/\/mock\/getUserInfo/, 'post', getUserInfo);
Mock.mock(/\/mock\/login/, 'post', login);
Mock.mock(/\/mock\/authorization/, 'get', authorization);
Mock.mock(/\/mock\/getTableData/, 'get', getTableData);
Mock.mock(/\/mock\/getFileList/, 'get', getFileList);
Mock.mock(/\/mock\/getFolderList/, 'get', getFolderList);

Mock.setup({
  // 响应时间为区间随机值
  timeout: '100-600',
});
export default Mock;
