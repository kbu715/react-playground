import { css, TypographyScale } from 'styled-components';
import { theme } from '..';

export const textStyle = (size: TypographyScale) => {
  return css`
    font-size: ${theme.fontSizes[size]};
    line-height: ${theme.lineHeights[size]};
    letter-spacing: ${theme.letterSpacings[size]};
  `;
};

export const truncate = () => {
  // ...
  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
};

export const lineClamp = (line: number) => {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
};

// https://css-tricks.com/almanac/properties/l/line-clamp/
