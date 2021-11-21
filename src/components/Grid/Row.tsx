import React, { ReactNode } from 'react';
import { Row as StyledRow } from './styles';

export interface RowProps {
  className?: string;
  justifyContent?: string;
  alignItems?: string;
  children?: ReactNode;
}

export const Row: React.FC<RowProps> = ({
  className,
  justifyContent,
  alignItems,
  children,
}) => {
  return (
    <StyledRow
      className={className}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledRow>
  );
};
