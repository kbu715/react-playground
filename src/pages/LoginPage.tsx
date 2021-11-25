import React from 'react';
import AuthForm from '../components/Blog/auth/AuthForm';
import AuthTemplate from '../components/Blog/auth/AuthTemplate';

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
