import styled from 'styled-components';
import { Images } from 'shared/constants/assets';
import { Margin } from 'styles/utilities/gutters';
import { Breakpoints } from 'styles/utilities/breakpoints';

export default styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url(${Images.ABOUT_US_INTRODUCTION}) center center no-repeat;
  background-size: cover;
`;

export const AboutUsIntroductionHeader = styled.div`
  display: flex;
  width: auto;
  position: absolute;
  top: 35%;
  left: 5%;
  h2 {
    margin: 0;
    color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
    font-size: 3.5rem;
    line-height: 7.6rem;
    letter-spacing: 1.5px;
    font-family: 'Roboto Thin';
    span {
      font-family: 'Roboto';
    }
  }
  @media (max-width: ${Breakpoints.desktop}) {
    h2 {
      font-size: 3.2rem;
      line-height: 7rem;
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    top: 25%;
    h2 {
      font-size: 2.5rem;
      line-height: 5rem;
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    top: 30%;
    h2 {
      font-size: 1.2rem;
      line-height: 3rem;
    }
  }
`;

export const AboutUsHeaderLine = styled.span`
  height: 1px;
  width: 75px;
  background-color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_3};
  border: 1px solid ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_3};
  margin-right: ${Margin.SIZE_3};
  margin-top: 3.8rem;
  @media (max-width: ${Breakpoints.desktop}) {
    margin-top: 3.5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 2.5rem;
    width: 60px;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 1.5rem;
    width: 50px;
  }
`;
