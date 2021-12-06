import { useRequest } from 'umi';

export default () => {
  const { data, loading } = useRequest({ url: '/api/500' });
  if (!loading) {
    console.log('users', data);
  }
  return <div>500</div>;
};
