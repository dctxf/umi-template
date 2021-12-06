declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module '*.json';

declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

declare type PageParams = {
  pageSize: number;
  size: number;
  current: number;
};
declare type Res = {
  code: number;
  message: string;
  result: any;
  success: boolean;
  timestamp: number;
  data: null | PageRes | any;
};
declare interface Window {
  CONFIG?: {
    API_URL?: string;
  };
}
/** APP name */
declare const APP_NAME: string;
/** APP version */
declare const APP_VERSION: string;
/** APP url */
declare const API_URL: string | undefined;
/** 不需要登录授权的路由 */
declare const NO_ACCESS_ROUTES: string[];

declare type MenuNode = {
  id: number;
  path: string;
  name: string;
  icon?: string;
  parentId?: number;
  children?: MenuNode[];
};
