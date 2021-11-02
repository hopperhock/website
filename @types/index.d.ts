import { Theme } from 'styles/theme/types';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
