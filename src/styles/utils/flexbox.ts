import { css } from 'styled-components';

const convertToFullName = (value: string) => {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return value;
  }
};

export const flexbox = (jc = 'center', ai = 'center') => {
  return css`
    display: flex;
    justify-content: ${convertToFullName(jc)};
    align-items: ${convertToFullName(ai)};
  `;
};

export const inlineFlexbox = (jc = 'center', ai = 'center') => {
  return css`
    display: inline-flex;
    justify-content: ${convertToFullName(jc)};
    align-items: ${convertToFullName(ai)};
  `;
};
