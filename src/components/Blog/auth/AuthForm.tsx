import React from 'react';
import { Link } from 'react-router-dom';
import { textMap } from '../../../constants/textMap';
import Button from '../common/Button';
import { StyledAuthForm, StyledFooter, StyledInput } from './styles';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

type AuthFormProps = {
  type: 'login' | 'register';
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const text = textMap[type];
  return (
    <StyledAuthForm>
      <h3>{`이메일로 ${text}`}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="이메일"
        />
        <StyledInput
          type="password"
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
        />
        {type === 'register' && (
          <StyledInput
            type="password"
            autoComplete="new-password"
            name="password-confirm"
            placeholder="비밀번호 확인"
          />
        )}
        {type === 'login' && (
          <div className="find-password">
            <Link to="/blog">비밀번호 찾기</Link>
          </div>
        )}
        <Button cyan fullWidth>
          {text}
        </Button>
      </form>
      <StyledFooter>
        {type === 'login' ? (
          <Link to="/blog/register">회원가입</Link>
        ) : (
          <Link to="/blog/login">로그인</Link>
        )}
      </StyledFooter>
    </StyledAuthForm>
  );
};

export default AuthForm;
