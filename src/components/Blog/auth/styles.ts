import styled from 'styled-components';
import { palette } from '../../../styles';

// AuthTemplate

export const StyledAuthTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background-color: #fff;
  border-radius: 4px;
`;

// AuthForm

export const StyledAuthForm = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }

  .find-password {
    text-align: right;
    margin-bottom: 1rem;
    a {
      color: ${palette.gray[6]};
      text-decoration: underline;
      &:hover {
        color: ${palette.gray[9]};
      }
    }
  }
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  border-bottom: 1px solid ${palette.gray[5]};
  padding: 0.5rem 0;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & {
    margin-bottom: 1rem;
  }
`;

export const StyledFooter = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
