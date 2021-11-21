import styled from 'styled-components';

export const StyledBox = styled.div<{ backgroundColor: string | undefined }>`
  width: 64px;
  height: 64px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledSubBox = styled.div<{ backgroundColor: string | undefined }>`
  width: 32px;
  height: 32px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledColorList = styled.div`
  display: flex;
`;

export const StyledColorItem = styled.div<{
  backgroundColor: string | undefined;
}>`
  background: ${({ backgroundColor }) => backgroundColor};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
