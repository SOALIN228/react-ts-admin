// ID序列
let id_sequence = 1000;

// 所有的用户数据
const users = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    phone: '13600000000',
    email: 'admin@react.com',
    desc: '超级管理员',
    conditions: 1,
    roles: [1, 2, 3],
  },
  {
    id: 2,
    username: 'user',
    password: '123456',
    phone: '13600000001',
    email: 'user@react.com',
    desc: '普通管理员',
    conditions: 1,
    roles: [2],
  },
  {
    id: 3,
    username: 'user',
    password: '123456',
    phone: '13600000001',
    email: 'user@react.com',
    desc: '普通管理员3',
    conditions: 1,
    roles: [2],
  },
  {
    id: 4,
    username: 'user',
    password: '123456',
    phone: '13600000001',
    email: 'user@react.com',
    desc: '普通管理员4',
    conditions: 1,
    roles: [2],
  },
  {
    id: 5,
    username: 'user',
    password: '123456',
    phone: '13600000001',
    email: 'user@react.com',
    desc: '普通管理员5',
    conditions: 1,
    roles: [2],
  },
];

// 所有的菜单数据
const menus = [
  {
    id: 1,
    title: '首页',
    icon: 'icon-home',
    url: '/home',
    parent: null,
    desc: '首页',
    sorts: 0,
    conditions: 1,
  },
  {
    id: 2,
    title: '系统管理',
    icon: 'icon-setting',
    url: '/system',
    parent: null,
    desc: '系统管理目录分支',
    sorts: 1,
    conditions: 1,
  },
  {
    id: 3,
    title: '用户管理',
    icon: 'icon-user',
    url: '/system/useradmin',
    parent: 2,
    desc: '系统管理/用户管理',
    sorts: 0,
    conditions: 1,
  },
  {
    id: 4,
    title: '角色管理',
    icon: 'icon-team',
    url: '/system/roleadmin',
    parent: 2,
    desc: '系统管理/角色管理',
    sorts: 1,
    conditions: 1,
  },
  {
    id: 5,
    title: '权限管理',
    icon: 'icon-safetycertificate',
    url: '/system/poweradmin',
    parent: 2,
    desc: '系统管理/权限管理',
    sorts: 2,
    conditions: 1,
  },
  {
    id: 6,
    title: '菜单管理',
    icon: 'icon-appstore',
    url: '/system/menuadmin',
    parent: 2,
    desc: '系统管理/菜单管理',
    sorts: 3,
    conditions: 1,
  },
];

// 所有的权限数据
const powers = [
  {
    id: 1,
    menu: 3,
    title: '新增',
    code: 'user:add',
    desc: '用户管理 - 添加权限',
    sorts: 1,
    conditions: 1,
  },
  {
    id: 2,
    menu: 3,
    title: '修改',
    code: 'user:up',
    desc: '用户管理 - 修改权限',
    sorts: 2,
    conditions: 1,
  },
  {
    id: 3,
    menu: 3,
    title: '查看',
    code: 'user:query',
    desc: '用户管理 - 查看权限',
    sorts: 3,
    conditions: 1,
  },
  {
    id: 4,
    menu: 3,
    title: '删除',
    code: 'user:del',
    desc: '用户管理 - 删除权限',
    sorts: 4,
    conditions: 1,
  },
  {
    id: 5,
    menu: 3,
    title: '分配角色',
    code: 'user:role',
    desc: '用户管理 - 分配角色权限',
    sorts: 5,
    conditions: 1,
  },

  {
    id: 6,
    menu: 4,
    title: '新增',
    code: 'role:add',
    desc: '角色管理 - 添加权限',
    sorts: 1,
    conditions: 1,
  },
  {
    id: 7,
    menu: 4,
    title: '修改',
    code: 'role:up',
    desc: '角色管理 - 修改权限',
    sorts: 2,
    conditions: 1,
  },
  {
    id: 8,
    menu: 4,
    title: '查看',
    code: 'role:query',
    desc: '角色管理 - 查看权限',
    sorts: 3,
    conditions: 1,
  },
  {
    id: 18,
    menu: 4,
    title: '分配权限',
    code: 'role:power',
    desc: '角色管理 - 分配权限',
    sorts: 4,
    conditions: 1,
  },
  {
    id: 9,
    menu: 4,
    title: '删除',
    code: 'role:del',
    desc: '角色管理 - 删除权限',
    sorts: 5,
    conditions: 1,
  },

  {
    id: 10,
    menu: 5,
    title: '新增',
    code: 'power:add',
    desc: '权限管理 - 添加权限',
    sorts: 1,
    conditions: 1,
  },
  {
    id: 11,
    menu: 5,
    title: '修改',
    code: 'power:up',
    desc: '权限管理 - 修改权限',
    sorts: 2,
    conditions: 1,
  },
  {
    id: 12,
    menu: 5,
    title: '查看',
    code: 'power:query',
    desc: '权限管理 - 查看权限',
    sorts: 3,
    conditions: 1,
  },
  {
    id: 13,
    menu: 5,
    title: '删除',
    code: 'power:del',
    desc: '权限管理 - 删除权限',
    sorts: 2,
    conditions: 1,
  },

  {
    id: 14,
    menu: 6,
    title: '新增',
    code: 'menu:add',
    desc: '菜单管理 - 添加权限',
    sorts: 1,
    conditions: 1,
  },
  {
    id: 15,
    menu: 6,
    title: '修改',
    code: 'menu:up',
    desc: '菜单管理 - 修改权限',
    sorts: 2,
    conditions: 1,
  },
  {
    id: 16,
    menu: 6,
    title: '查看',
    code: 'menu:query',
    desc: '菜单管理 - 查看权限',
    sorts: 3,
    conditions: 1,
  },
  {
    id: 17,
    menu: 6,
    title: '删除',
    code: 'menu:del',
    desc: '菜单管理 - 删除权限',
    sorts: 2,
    conditions: 1,
  },
];

// 所有的角色数据
const roles = [
  {
    id: 1,
    title: '超级管理员',
    desc: '超级管理员拥有所有权限',
    sorts: 1,
    conditions: 1,
    menuAndPowers: [
      { menuId: 1, powers: [] },
      { menuId: 2, powers: [] },
      { menuId: 3, powers: [1, 2, 3, 4, 5] },
      { menuId: 4, powers: [6, 7, 8, 9, 18] },
      { menuId: 5, powers: [10, 11, 12, 13] },
      { menuId: 6, powers: [14, 15, 16, 17] },
    ],
  },
  {
    id: 2,
    title: '普通管理员',
    desc: '普通管理员',
    sorts: 2,
    conditions: 1,
    menuAndPowers: [
      { menuId: 1, powers: [] },
      { menuId: 2, powers: [] },
      { menuId: 3, powers: [3] },
      { menuId: 4, powers: [6, 7, 8, 18] },
      { menuId: 5, powers: [10, 11, 12] },
      { menuId: 6, powers: [14, 15, 16] },
    ],
  },
  {
    id: 3,
    title: '运维人员',
    desc: '运维人员不能删除对象',
    sorts: 3,
    conditions: 1,
    menuAndPowers: [
      { menuId: 1, powers: [] },
      { menuId: 2, powers: [] },
      { menuId: 3, powers: [3] },
      { menuId: 4, powers: [7, 8] },
      { menuId: 5, powers: [11, 12] },
      { menuId: 6, powers: [15, 16] },
    ],
  },
];

/**
 * 登录
 * @param obj
 */
export const onLogin = obj => {
  const params = JSON.parse(obj.body);
  const u = users.find(function (item) {
    return item.username === params.username;
  });
  if (!u) {
    return { status: 404, message: '用户名或密码错误' };
  }
  return { message: '登录成功' };
};

/**
 * 获取所有菜单
 * @param obj
 */
export const getMenus = obj => {
  return { menus };
};

/**
 * 根据ID获取菜单
 * @param obj
 */
export const getMenusById = obj => {
  const params = JSON.parse(obj.body);
  let res = [];
  if (params.id instanceof Array) {
    res = menus.filter(function (item) {
      return params.id.includes(item.id);
    });
  } else {
    const t = menus.find(function (item) {
      return item.id === params.id;
    });
    res.push(t);
  }
  return { res };
};

/**
 * 添加新菜单
 * @param obj
 */
export const addMenu = obj => {
  const params = JSON.parse(obj.body);
  params.id = ++id_sequence;
  menus.push(params);
  return { menus };
};

/**
 * 修改菜单
 * @param obj
 */
export const upMenu = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = menus.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    const news = Object.assign({}, menus[oldIndex], params);
    menus.splice(oldIndex, 1, news);
    return { status: 200, data: menus, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 删除菜单
 * @param obj
 */
export const delMenu = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = menus.findIndex(function (item) {
    return item.id === params.id;
  });

  if (oldIndex !== -1) {
    const haveChild = menus.findIndex(function (item) {
      return item.parent === menus[oldIndex].id;
    });
    if (haveChild === -1) {
      menus.splice(oldIndex, 1);
      return { status: 200, data: menus, message: 'success' };
    } else {
      return { status: 204, data: null, message: '该菜单下有子菜单，无法删除' };
    }
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 根据菜单ID查询其下权限
 * @param obj
 */
export const getPowerByMenuId = obj => {
  const params = JSON.parse(obj.body);
  const menuId = Number(params.menuId);

  if (menuId) {
    return powers
      .filter(function (item) {
        return item.menu === menuId;
      })
      .sort(function (a, b) {
        return a.sorts - b.sorts;
      });
  }

  return [];
};

/**
 * 根据权限ID查询对应的权限
 * @param obj
 */
export const getPowerById = obj => {
  const params = JSON.parse(obj.body);
  let res = [];
  if (params.id instanceof Array) {
    res = powers.filter(function (item) {
      return params.id.includes(item.id);
    });
  } else {
    const t = powers.find(function (item) {
      return item.id === params.id;
    });
    res.push(t);
  }

  return res;
};

/**
 * 添加权限
 * @param obj
 */
export const addPower = obj => {
  const params = JSON.parse(obj.body);
  params.id = ++id_sequence;
  powers.push(params);

  return { id: params.id };
};

/**
 * 修改权限
 * @param obj
 */
export const upPower = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = powers.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    const news = Object.assign({}, powers[oldIndex], params);
    powers.splice(oldIndex, 1, news);
    return { status: 200, data: { id: params.id }, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 删除权限
 * @param obj
 */
export const delPower = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = powers.findIndex(function (item) {
    return item.id === params.id;
  });

  if (oldIndex !== -1) {
    powers.splice(oldIndex, 1);
    return { status: 200, data: null, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 查询角色（分页,条件筛选）
 * @param obj
 */
export const getRoles = obj => {
  const params = JSON.parse(obj.body);
  const map = roles.filter(function (item) {
    let yeah = true;
    if (params.title && !item.title.includes(params.title)) {
      yeah = false;
    }
    if (params.conditions && item.conditions !== params.conditions) {
      yeah = false;
    }
    return yeah;
  });
  const r = map.sort(function (a, b) {
    return a.sorts - b.sorts;
  });
  const res = r.slice(
    (params.pageNum - 1) * params.pageSize,
    params.pageNum * params.pageSize
  );
  return { list: res, total: map.length };
};

/**
 * 查询角色（所有）
 * @param obj
 */
export const getAllRoles = obj => {
  const params = JSON.parse(obj.body);
  let res = [];
  if (params.id instanceof Array) {
    res = roles.filter(function (item) {
      return params.id.includes(item.id);
    });
  } else {
    const t = roles.find(function (item) {
      return item.id === params.id;
    });
    res.push(t);
  }
  return res;
};

/**
 * 查询角色（通过角色ID）
 * @param obj
 */
export const getRoleById = obj => {
  const params = JSON.parse(obj.body);
  let res = [];
  if (params.id instanceof Array) {
    res = roles.filter(function (item) {
      return params.id.includes(item.id);
    });
  } else {
    const t = roles.find(function (item) {
      return item.id === params.id;
    });
    res.push(t);
  }
  return res;
};

/**
 * 添加角色
 * @param obj
 */
export const addRole = obj => {
  const params = JSON.parse(obj.body);
  params.id = ++id_sequence;
  if (!params.menuAndPowers) {
    params.menuAndPowers = [];
  }
  roles.push(params);
  return null;
};

/**
 * 修改角色
 * @param obj
 */
export const upRole = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = roles.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    const news = Object.assign({}, roles[oldIndex], params);
    roles.splice(oldIndex, 1, news);
    return { status: 200, data: null, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 删除角色
 * @param obj
 */
export const delRole = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = roles.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    roles.splice(oldIndex, 1);
    return { status: 200, data: null, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 根据角色ID查询该角色所拥有的菜单和权限详细信息
 * @param obj
 */
export const findAllPowerByRoleId = obj => {
  const params = JSON.parse(obj.body);
  const t = roles.find(function (item) {
    return item.id === params.id;
  });
  if (t) {
    const res = t.powers.map(function (item) {
      const _menu = menus.find(function (v) {
        return v.id === item.menuId;
      });
      const _powers = item.powers.map(function (v) {
        return powers.find(function (p) {
          return p.id === v;
        });
      });
      _menu.powers = _powers.filter(function (item) {
        return item.conditions === 1;
      });
      return _menu;
    });
    return { status: 200, data: res, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该角色' };
  }
};

/**
 * 获取所有的菜单及权限数据 - 为了构建PowerTree组件
 * @param obj
 */
export const getAllMenusAndPowers = obj => {
  const params = JSON.parse(obj.body);
  const res = menus.map(function (item) {
    const _menu = item;
    const _powers = powers.filter(function (v) {
      return v.menu === item.id && v.conditions === 1;
    });
    _menu.powers = _powers;
    return _menu;
  });
  return res;
};

/**
 * 给指定角色分配菜单和权限
 * @param obj
 */
export const setPowersByRoleId = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = roles.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    const pow = params.menus.map(function (item) {
      return { menuId: item, powers: [] };
    });
    // 将每一个权限id归类到对应的菜单里
    params.powers.forEach(function (ppItem) {
      // 通过权限id查询该权限对象
      const thePowerData = powers.find(function (pItem) {
        return pItem.id === ppItem;
      });
      if (thePowerData) {
        const theMenuId = thePowerData.menu;
        if (theMenuId) {
          const thePow = pow.find(function (powItem) {
            return powItem.menuId === theMenuId;
          });
          if (thePow) {
            thePow.powers.push(ppItem);
          }
        }
      }
    });

    roles[oldIndex].menuAndPowers = pow;
    return { status: 200, data: null, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 条件分页查询用户列表
 * @param obj
 */
export const getUserList = obj => {
  const params = JSON.parse(obj.body);
  const map = users.filter(function (item) {
    let yeah = true;
    if (params.username && !item.username.includes(params.username)) {
      yeah = false;
    }
    if (params.conditions && item.conditions !== params.conditions) {
      yeah = false;
    }
    return yeah;
  });
  const pageNum = Number(params.pageNum); // 从第1页开始
  const pageSize = Number(params.pageSize);
  const res = map.slice((pageNum - 1) * pageSize, pageNum * pageSize);
  return { list: res, total: map.length };
};

/**
 * 添加用户
 * @param obj
 */
export const addUser = obj => {
  const params = JSON.parse(obj.body);
  params.id = ++id_sequence;
  users.push(params);
  return null;
};

/**
 * 添加用户
 * @param obj
 */
export const upUser = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = users.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    const news = Object.assign({}, users[oldIndex], params);
    users.splice(oldIndex, 1, news);
    return { status: 200, data: null, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};

/**
 * 删除用户
 * @param obj
 */
export const delUser = obj => {
  const params = JSON.parse(obj.body);
  const oldIndex = users.findIndex(function (item) {
    return item.id === params.id;
  });
  if (oldIndex !== -1) {
    users.splice(oldIndex, 1);
    return { status: 200, data: null, message: 'success' };
  } else {
    return { status: 204, data: null, message: '未找到该条数据' };
  }
};
