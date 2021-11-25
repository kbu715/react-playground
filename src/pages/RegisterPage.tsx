import React from 'react';
import AuthForm from '../components/Blog/auth/AuthForm';
import AuthTemplate from '../components/Blog/auth/AuthTemplate';

const RegisterPage: React.FC = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
