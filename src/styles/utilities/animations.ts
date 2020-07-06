import { keyframes } from 'styled-components';
import { hexToRGB } from './funtions';

export const backgroundFadeIn = (color: string) => keyframes`
  0% {
    background-color: ${hexToRGB(color, '0')};
  }
  25% {
    background-color: ${hexToRGB(color, '0.25')};
  }
  50% {
    background-color: ${hexToRGB(color, '0.5')}
  }
  75% {
    background-color: ${hexToRGB(color, '0.75')}
  }
  100% {
    background-color: ${hexToRGB(color, '1')}
  }
`;
