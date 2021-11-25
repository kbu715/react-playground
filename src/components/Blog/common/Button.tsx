import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../../../styles';

type ButtonProps = {
  fullWidth?: boolean;
  cyan?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #fff;
  cursor: pointer;
  background-color: ${palette.gray[8]};

  &:hover {
    background-color: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background-color: ${palette.cyan[5]};
      &:hover {
        background-color: ${palette.cyan[4]};
      }
    `}
`;

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
