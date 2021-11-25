import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styles';

const StyledButton = styled.button`
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
`;

const Button: React.FC = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
