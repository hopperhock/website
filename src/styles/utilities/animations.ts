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

export const slideIn = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: hidden;
  }
  to {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;
