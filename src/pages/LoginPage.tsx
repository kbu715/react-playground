import React from 'react';
import AuthTemplate from '../components/Blog/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
