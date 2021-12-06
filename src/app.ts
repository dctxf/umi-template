import type { RequestConfig } from 'umi';
import { history } from 'umi';
import type { RequestOptionsInit, ResponseError } from 'umi-request';

import { queryCurrent } from './service/user';

if (window.CONFIG) {
  // eslint-disable-next-line no-console
  console.warn('启用云配置!!! 请检查配置文件是否正确');
}

/**
 * 状态初始化
 * @returns
 */
export async function getInitialState(): Promise<{
  currentUser?: User.Info;
  fetchUserInfo?: () => any;
}> {
  const fetchUserInfo = async () => {
    try {
      const res = await queryCurrent();
      return res;
    } catch (error) {
      history.push('/user/login');
    }
    return undefined;
  };

  /**
   * @see 如果是登录页面，不执行
   */
  const { pathname } = history.location;
  if (!NO_ACCESS_ROUTES.includes(pathname)) {
    const currentUser = await fetchUserInfo();
    return { fetchUserInfo, currentUser };
  }

  return { fetchUserInfo };
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (error.message && error.message !== 'Token失效请重新登录!') {
    console.error({ message: error.message });
  }
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    console.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }
  throw error;
};

// 授权拦截器
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const token = window.localStorage.getItem(`${APP_NAME}_${APP_VERSION}_TOKEN`);
  const authHeader = !url.includes('/sys/login')
    ? {
        'Access-Token': token || '',
      }
    : [];
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

// 修改分页参数名
const pageInterceptor = (url: string, options: RequestOptionsInit) => {
  const { params } = options;
  if (params && (params as PageParams).pageSize) {
    (params as PageParams).size = (params as PageParams).pageSize;
  }
  return { url, options: { ...options, params } };
};

// 响应拦截器
const pageResponseInterceptor = async (response: Response) => {
  const res = await response.json();
  const { success, message, data } = res as Res;
  // // data 为 null时 修复 umi 的bug
  // if (message?.includes('Token失效请重新登录')) history.push('/user/login');
  if (data === null) return '';
  if (data === undefined) throw new Error(message);
  if (!success) throw new Error(message);
  // 修改分页响应
  if (data && data.records) {
    data.data = data.records;
  }
  return { ...res, data };
};

// request 配置
export const request: RequestConfig = {
  requestInterceptors: [authHeaderInterceptor, pageInterceptor],
  responseInterceptors: [pageResponseInterceptor],
  errorHandler,
  errorConfig: {
    adaptor: (res) => {
      return {
        ...res,
        errorCode: res.code,
        errorMessage: res.message,
      };
    },
  },
  // timeout: 1e5,
  // 增加baseURL
  prefix: window.CONFIG?.API_URL === undefined ? API_URL : window.CONFIG.API_URL,
  useCache: true,
};
