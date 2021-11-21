import React, { ReactNode } from 'react';
import { Container as StyledContainer } from './styles';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
