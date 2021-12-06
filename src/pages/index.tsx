import { useModel } from '@/.umi/plugin-model/useModel';
import styles from './index.less';

export default function IndexPage() {
  const { initialState } = useModel('@@initialState');
  console.log(initialState?.currentUser);
  console.log(APP_NAME, APP_VERSION);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
