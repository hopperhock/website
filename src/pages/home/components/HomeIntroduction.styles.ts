import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { hexToRGB } from 'styles/utilities/funtions';
import { Title, Subtitle, TextBody } from 'styles/utilities/font-sizes';

export const HomeIntroContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => hexToRGB(theme.BLACK, '0.6')};
  background: linear-gradient(
    90deg,
    ${({ theme }) => hexToRGB(theme.BLACK)} 0%,
    ${({ theme }) => hexToRGB(theme.BLACK, '0.9')} 45%,
    ${({ theme }) => hexToRGB(theme.BLACK, '0')} 100%
  );
  overflow: hidden;
  @media (max-width: ${Breakpoints.mobile}) {
    background: url('/Images/VideoPoster.png') center center no-repeat;
    background-size: cover;
    :before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: ${({ theme }) => hexToRGB(theme.BLACK, '0.6')};
    }
  }
`;

export const HomeIntroVideo = styled.video`
  position: sticky;
  z-index: -1;
  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }
`;

export const HomeIntroDescription = styled.div`
  width: auto;
  position: absolute;
  top: 35%;
  left: 5%;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  h1 {
    font-size: ${Subtitle.SIZE_1};
    font-weight: bold;
    letter-spacing: 10px;
  }
  p {
    font-size: ${Title.SIZE_2};
    max-width: 24ch;
  }
  @media (max-width: ${Breakpoints.desktop}) {
    h1 {
      font-size: ${Subtitle.SIZE_3};
    }
    p {
      font-size: ${Subtitle.SIZE_1};
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    h1 {
      font-size: ${TextBody.SIZE_2};
    }
    p {
      font-size: ${Subtitle.SIZE_3};
    }
  }
`;
