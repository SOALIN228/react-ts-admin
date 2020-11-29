const { postTest, getTest } = require('./response/demo');
// const {
//   onLogin,
//   getMenus,
//   getMenusById,
//   addMenu,
//   upMenu,
//   delMenu,
//   getPowerByMenuId,
//   getPowerById,
//   addPower,
//   upPower,
//   delPower,
//   getRoles,
//   getAllRoles,
//   getRoleById,
//   addRole,
//   upRole,
//   delRole,
//   findAllPowerByRoleId,
//   getAllMenusAndPowers,
//   setPowersByRoleId,
//   getUserList,
//   addUser,
//   upUser,
//   delUser,
// } = require('./response/data');

// demo
// Mock.mock(/\/mock\/postTest/, 'post', postTest);
// Mock.mock(/\/mock\/getTest/, 'get', getTest);

exports.mockPostApi = function (obj) {
  const url = obj.url;
  // post 参数
  const body = obj.body;
  switch (url) {
    case '/mock/postTest':
      return postTest(body);
    default:
      return { status: 404, data: null, message: 'api not found' };
  }
};

exports.mockGetApi = function (obj) {
  const url = obj.url.split('?')[0];
  // get 参数
  const { ...body } = obj.body;
  switch (url) {
    case '/mock/getTest':
      return getTest(body);
    default:
      return { status: 404, data: null, message: 'api not found' };
  }
};

// test
// Mock.mock(/\/api\/login/, 'post', onLogin);
// Mock.mock(/\/api\/getmenus/, 'post', getMenus);
// Mock.mock(/\/api\/getMenusById/, 'post', getMenusById);
// Mock.mock(/\/api\/addmenu/, 'post', addMenu);
// Mock.mock(/\/api\/upmenu/, 'post', upMenu);
// Mock.mock(/\/api\/delmenu/, 'post', delMenu);
// Mock.mock(/\/api\/getpowerbymenuid/, 'post', getPowerByMenuId);
// Mock.mock(/\/api\/getPowerById/, 'post', getPowerById);
// Mock.mock(/\/api\/addpower/, 'post', addPower);
// Mock.mock(/\/api\/uppower/, 'post', upPower);
// Mock.mock(/\/api\/delpower/, 'post', delPower);
// Mock.mock(/\/api\/getroles/, 'post', getRoles);
// Mock.mock(/\/api\/getAllRoles/, 'post', getAllRoles);
// Mock.mock(/\/api\/getRoleById/, 'post', getRoleById);
// Mock.mock(/\/api\/addrole/, 'post', addRole);
// Mock.mock(/\/api\/uprole/, 'post', upRole);
// Mock.mock(/\/api\/delrole/, 'post', delRole);
// Mock.mock(/\/api\/findAllPowerByRoleId/, 'post', findAllPowerByRoleId);
// Mock.mock(/\/api\/getAllMenusAndPowers/, 'post', getAllMenusAndPowers);
// Mock.mock(/\/api\/setPowersByRoleIds/, 'post', setPowersByRoleId);
// Mock.mock(/\/api\/getUserList/, 'post', getUserList);
// Mock.mock(/\/api\/addUser/, 'post', addUser);
// Mock.mock(/\/api\/upUser/, 'post', upUser);
// Mock.mock(/\/api\/delUser/, 'post', delUser);
