import React from 'react';
import AuthTemplate from '../components/Blog/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
