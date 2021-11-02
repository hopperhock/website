import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { hexToRGB } from 'styles/utilities/funtions';
import { Images } from 'shared/constants/assets';
import { Title, Subtitle, TextBody } from 'styles/utilities/font-sizes';

export default styled.div`
  position: relative;
  height: 100vh;
  background: url(${Images.SERVICES_BANNER}) center center no-repeat;
  background-size: cover;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const ServicesIntroDescription = styled.div`
  width: auto;
  position: absolute;
  top: 35%;
  left: 5%;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  h1 {
    font-family: 'Helvetica';
    font-size: ${Title.SIZE_4};
    font-weight: normal;
    letter-spacing: 3px;
  }
  p {
    margin: 0;
    font-family: 'Roboto Thin';
    font-size: ${Title.SIZE_1};
    letter-spacing: 3px;
    span {
      font-family: 'Roboto Bold';
    }
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
