import React, { ChangeEvent, FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/Blog/auth/AuthForm';
import { RootState } from '../../modules';
import { changeField, initializeForm } from '../../modules/auth';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: RootState) => ({
    form: auth.register,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      dispatch(
        changeField({
          form: 'register',
          key: name,
          value,
        })
      );
    },
    [dispatch]
  );

  // 폼 등록 이벤트 핸들러
  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: 구현예정
  }, []);

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
