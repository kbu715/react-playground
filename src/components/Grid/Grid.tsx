import React from 'react';

import { Container } from './Container';
import { Row, RowProps } from './Row';
import { Column, ColumnProps } from './Column';

type GridProps = RowProps & ColumnProps;

export const Grid: React.FC<GridProps> = ({
  sm,
  md,
  lg = md,
  alignItems,
  justifyContent,
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        <Column sm={sm} md={md} lg={lg}>
          {children}
        </Column>
      </Row>
    </Container>
  );
};
