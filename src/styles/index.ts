import { DefaultTheme } from 'styled-components';

const fontFamilies = {
  main: 'Noto Sans KR, sans-serif',
};

const fontSizes = {
  xxs: '12px',
  xs: '13px',
  sm: '14px',
  base: '16px',
  md: '18px',
  lg: '24px',
};

const lineHeights = {
  xxs: '16px',
  xs: '20px',
  sm: '24px',
  base: '24px',
  md: '28px',
  lg: '34px',
};

const letterSpacings = {
  xxs: '-0.005em',
  xs: '-0.01em',
  sm: '-0.01em',
  base: '-0.01em',
  md: '-0.02em',
  lg: '-0.01em',
};

const colors = {
  black: '#000',
  dark: '#191a20',
  primary: '#3f4150',
  secondary: '#8c8d96',
  tertiary: '#b2b3b9',
  border: '#e0e2e7',
  background: '#f7f8fa',
  white: '#fff',
  blue: '#3da5f5',
  blueDark: '#3186c4',
  blueLight: '#ecf6fe',
  red: '#f86d7d',
  green: '#22c58b',
};

const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
};

export const gutter = '10px';

export const theme: DefaultTheme = {
  fontFamilies,
  fontSizes,
  lineHeights,
  letterSpacings,
  colors,
  breakpoints,
  gutter,
};

// source: https://yeun.github.io/open-color/
export const palette = {
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
};
