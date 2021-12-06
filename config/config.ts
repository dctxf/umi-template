import { defineConfig } from 'umi';
import { name, version } from '../package.json';
import routes from './routes';

export default defineConfig({
  define: {
    APP_NAME: name.toLocaleUpperCase(),
    APP_VERSION: version,
    API_URL: '',
    NO_ACCESS_ROUTES: routes.filter((i) => i.access === 'noAccess').map((i) => i.path),
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
  // externals: {
  //   react: 'window.React',
  // },
  // scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
});
