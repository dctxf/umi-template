import { queryCurrent } from './service/user';
import { history, RequestConfig } from 'umi';

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
  if (!['/user/login'].includes(pathname)) {
    const currentUser = await fetchUserInfo();
    return { fetchUserInfo, currentUser };
  }

  return { fetchUserInfo };
}

/**
 * request 配置
 */
export const request: RequestConfig = {
  // timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
};
