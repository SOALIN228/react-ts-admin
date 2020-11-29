import Mock from 'mockjs';
import { postTest, getTest } from './response/demo';
import {
  onLogin,
  getMenus,
  getMenusById,
  addMenu,
  upMenu,
  delMenu,
  getPowerByMenuId,
  getPowerById,
  addPower,
  upPower,
  delPower,
  getRoles,
  getAllRoles,
  getRoleById,
  addRole,
  upRole,
  delRole,
  findAllPowerByRoleId,
  getAllMenusAndPowers,
  setPowersByRoleId,
  getUserList,
  addUser,
  upUser,
  delUser,
} from './response/data';

// demo
Mock.mock(/\/mock\/postTest/, 'post', postTest);
Mock.mock(/\/mock\/getTest/, 'get', getTest);

// test
Mock.mock(/\/api\/login/, 'post', onLogin);
Mock.mock(/\/api\/getmenus/, 'get', getMenus);
Mock.mock(/\/api\/getMenusById/, 'post', getMenusById);
Mock.mock(/\/api\/addmenu/, 'post', addMenu);
Mock.mock(/\/api\/upmenu/, 'post', upMenu);
Mock.mock(/\/api\/delmenu/, 'post', delMenu);
Mock.mock(/\/api\/getpowerbymenuid/, 'get', getPowerByMenuId);
Mock.mock(/\/api\/getPowerById/, 'post', getPowerById);
Mock.mock(/\/api\/addpower/, 'post', addPower);
Mock.mock(/\/api\/uppower/, 'post', upPower);
Mock.mock(/\/api\/delpower/, 'post', delPower);
Mock.mock(/\/api\/getroles/, 'get', getRoles);
Mock.mock(/\/api\/getAllRoles/, 'get', getAllRoles);
Mock.mock(/\/api\/getRoleById/, 'post', getRoleById);
Mock.mock(/\/api\/addrole/, 'post', addRole);
Mock.mock(/\/api\/uprole/, 'post', upRole);
Mock.mock(/\/api\/delrole/, 'post', delRole);
Mock.mock(/\/api\/findAllPowerByRoleId/, 'get', findAllPowerByRoleId);
Mock.mock(/\/api\/getAllMenusAndPowers/, 'get', getAllMenusAndPowers);
Mock.mock(/\/api\/setPowersByRoleIds/, 'post', setPowersByRoleId);
Mock.mock(/\/api\/getUserList/, 'get', getUserList);
Mock.mock(/\/api\/addUser/, 'post', addUser);
Mock.mock(/\/api\/upUser/, 'post', upUser);
Mock.mock(/\/api\/delUser/, 'post', delUser);

Mock.setup({
  // 响应时间为区间随机值
  timeout: '100-600',
});
export default Mock;
