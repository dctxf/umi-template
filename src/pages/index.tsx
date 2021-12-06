import { Link, useModel, useRequest } from 'umi';

import styles from './index.less';

export default function IndexPage() {
  const { initialState } = useModel('@@initialState');
  console.log('initialState', initialState?.currentUser);

  const { data, loading } = useRequest({ url: '/api/users' });
  if (!loading) {
    console.log('users', data);
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/user/list">用户列表</Link>
    </div>
  );
}
