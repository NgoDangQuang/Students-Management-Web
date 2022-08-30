import { Redirect, RouteProps } from 'react-router-dom';

export function DefaultRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <Redirect to="/admin/dashboard" />
  );
}
