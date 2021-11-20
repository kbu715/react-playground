import { css } from 'styled-components';

export function truncate() {
  // ...
  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
}

export function lineClamp(line: number) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
}

// https://css-tricks.com/almanac/properties/l/line-clamp/
