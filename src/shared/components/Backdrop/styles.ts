import styled from 'styled-components';
import { hexToRGB } from 'styles/utilities/funtions';

export default styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => hexToRGB(theme.BLACK, '0.5')};
  transition: opacity 0.2s linear;
`;
