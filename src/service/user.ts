import { request } from 'umi';

export const queryCurrent = () => request('/api/currentUser');
