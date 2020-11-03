import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { hexToRGB } from 'styles/utilities/funtions';
import { Title, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Images } from 'shared/constants/assets';

export const HomeIntroContainer = styled.div`
  background: ${({ theme }) => hexToRGB(theme.BLACK, '0.6')};
  background: linear-gradient(
    90deg,
    ${({ theme }) => hexToRGB(theme.BLACK)} 0%,
    ${({ theme }) => hexToRGB(theme.BLACK, '0.9')} 45%,
    ${({ theme }) => hexToRGB(theme.BLACK, '0')} 100%
  );
  position: relative;
  height: 100vh;
  overflow: hidden;
  @media (max-width: ${Breakpoints.mobile}) {
    background: url(${Images.HOME_VIDEO_POSTER}) center center no-repeat;
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
  position: relative;
  top: 50%;
  left: 50%;
  min-height: 100%;
  overflow: hidden;
  z-index: -1;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
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
    font-family: 'Helvetica';
    font-size: ${Title.SIZE_6};
    font-weight: 100;
    letter-spacing: 0.625rem;
  }
  p {
    font-size: ${Title.SIZE_1};
    max-width: 23ch;
  }
  @media (max-width: ${Breakpoints.desktop}) {
    h1 {
      font-size: ${Subtitle.SIZE_3};
    }
    p {
      font-size: ${Title.SIZE_4};
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    h1 {
      font-size: ${Subtitle.SIZE_4};
    }
    p {
      font-size: ${Title.SIZE_5};
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    h1 {
      font-size: ${TextBody.SIZE_2};
    }
    p {
      font-size: ${Subtitle.SIZE_4};
    }
  }
`;
