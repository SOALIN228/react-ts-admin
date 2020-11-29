/**
 * 错误代码
 */

interface errorInfoProp {
  [key: string]: {
    errno: string;
    msg: string;
  };
}

export default {
  '101': {
    errno: '101',
    msg: 'SQL异常',
  },
  '102': {
    errno: '102',
    msg: 'SQL事务异常',
  },
  '103': {
    errno: '103',
    msg: '唯一键冲突',
  },
  '400': {
    errno: '400',
    msg: '参数异常',
  },
  '401': {
    errno: '401',
    msg: '权限不足',
  },
  '402': {
    errno: '402',
    msg: '未登录',
  },
  '403': {
    errno: '403',
    msg: '用户名或密码错误',
  },
  '404': {
    errno: '404',
    msg: '用户不存在',
  },
  '500': {
    errno: '500',
    msg: '未知异常',
  },
  '501': {
    errno: '501',
    msg: '数据不存在',
  },
  '600': {
    errno: '600',
    msg: '接口响应数据存在异常',
  },
  '701': {
    errno: '701',
    msg: 'IO异常',
  },
} as errorInfoProp;
