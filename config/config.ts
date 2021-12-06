import { defineConfig } from 'umi';
import { name, version } from '../package.json';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  publicPath: REACT_APP_ENV ? `/${REACT_APP_ENV}/` : `/`,
  base: REACT_APP_ENV || '/',
  define: {
    APP_NAME: name.toLocaleUpperCase(),
    APP_VERSION: version,
  },
  hash: true,
  history: { type: 'browser' },
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    chrome: 49,
    firefox: 64,
    safari: 10,
    edge: 13,
    ios: 10,
  },
  fastRefresh: {},
  mfsu: {},
  webpack5: {},
  plugins: [
    // '@umijs/plugin-initial-state',
    // '@umijs/plugin-access'
  ],
  request: {
    dataField: 'data',
  },
  // externals: {
  //   react: 'window.React',
  // },
  // scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
});
