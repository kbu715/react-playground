import React, { ChangeEvent, FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/Blog/auth/AuthForm';
import { RootState } from '../../modules';
import { changeField, initializeForm, registerThunk } from '../../modules/auth';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }: RootState) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
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
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { username, password, passwordConfirm } = form;
      if (password !== passwordConfirm) {
        // TODO: 오류 처리
        return;
      }
      dispatch(registerThunk({ username, password }));
    },
    [dispatch, form]
  );

  // 컴포넌트가 처음 렌더링될 때  form을 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.error('회원가입 오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterForm;
