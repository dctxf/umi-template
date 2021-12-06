import { useRequest } from 'umi';

export default () => {
  const { data, loading } = useRequest({ url: '/api/users/page' });
  if (!loading) {
    console.log('users', data);
  }
  return <div>users</div>;
};
