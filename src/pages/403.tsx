import { useRequest } from 'umi';

export default () => {
  const { data, loading } = useRequest({ url: '/api/403' });
  if (!loading) {
    console.log('users', data);
  }
  return <div>403</div>;
};
