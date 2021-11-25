import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { StyledAuthTemplate, WhiteBox } from './styles';

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당
 */

type AuthTemplateProps = {
  children: ReactNode;
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <StyledAuthTemplate>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/blog">B L O G</Link>
        </div>
        {children}
      </WhiteBox>
    </StyledAuthTemplate>
  );
};

export default AuthTemplate;
