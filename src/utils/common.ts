/**
 * 通用方法封装
 */

interface UrlParamsProps {
  key?: string;
  href?: string;
}

/**
 * 获取url中？拼接数据
 * key 为希望获取值的键，默认返回整个对象
 * href 为希望处理的url地址，默认使用window.location.href
 * @param params UrlParamsProps
 */
export function urlParams(params: UrlParamsProps) {
  const queryStr = params.href
    ? params.href.split('?')
    : window.location.href.split('?');
  if (queryStr[1]) {
    const paramsObj = queryStr[1].split('&');
    const obj: any = {};
    paramsObj.map(item => {
      const _itme = item.split('=');
      obj[_itme[0]] = decodeURIComponent(_itme[1]);
    });
    return params.key ? obj[params.key] : obj;
  }
}
