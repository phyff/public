import React from 'react';
import Auth from '../domain/Auth/Auth';
import usePassword from '../hooks/usePassword';
import PageLoading from '../components/PageLoading';

const withAuth = function withAuth(WrappedComponent) {
  const WithProtect = (props) => {
    const password = usePassword();
    if (password) {
      if (localStorage.authentication === password) return <WrappedComponent {...props} />;
      return <Auth />;
    }
    return <PageLoading />;
  };

  return WithProtect;
};

export default withAuth;
