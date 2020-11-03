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

// bob animation
export const bobAnimation = (color: string) => keyframes`
 0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-18px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-18px);
  }
`;

export const bobFloat = (color: string) => keyframes`
  100% {
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
`;
