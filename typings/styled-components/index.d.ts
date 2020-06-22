import { Theme } from 'styles/theme/types';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
