import styled, { keyframes } from 'styled-components';
import ServicesDescriptionBackground from 'styles/illustrations/ServicesDescriptionBackground';
import { Title, FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Margin, Padding } from 'styles/utilities/gutters';

// Animations
const circleTranslate = keyframes`
  0% {
    transform: translate(10%, -1%);
  }
  25% {
    opacity: 1
  }
  75%, 100% {
    transform: translate(-9.5%, 10.5%);
    opacity: 0
  }
`;

const triangleTranslate = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2%, 2%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export default styled.div`
  position: relative;
  width: 100%;
  margin-bottom: -${Margin.SIZE_1};
  @media (max-width: ${Breakpoints.desktop}) {
    height: 130vh;
  }
  @media (max-width: ${Breakpoints.laptop}) {
    height: 80vh;
  }
  @media (max-width: ${Breakpoints.laptop}) and (max-height: 62.5rem) {
    height: 140vh;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    height: 70vh;
  }
  @media (max-width: ${Breakpoints.mobile}) and (min-height: 45rem) {
    height: 50vh;
  }
  @media (min-width: 33.74rem) and (max-width: ${Breakpoints.mobile}) and (min-height: 45rem) {
    height: 75vh;
  }
`;

export const MainBackground = styled(ServicesDescriptionBackground)`
  position: relative;
  width: 100%;
  margin-top: -46%;
  overflow-x: hidden;
  .triangle {
    -webkit-animation: ${triangleTranslate} 6s infinite;
    animation: ${triangleTranslate} 6s infinite;
  }
  .triangle-1 {
    animation-delay: 2.5s;
  }
  .triangle-2 {
    animation-delay: 1.5s;
  }
  .triangle-3 {
    animation-delay: 0s;
  }
  .circle {
    transition: all 1s linear;
  }
  .circle-1:hover {
    transform: translate(2%, 1%);
  }
  .circle-2:hover {
    transform: translate(-2%, 1%);
  }
  .animated-circle {
    transform: translate3d(6%, 1.5%, 0);
    -webkit-animation: ${circleTranslate} 4.5s infinite;
    animation: ${circleTranslate} 4.5s infinite;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
    margin-top: -50vh;
  }
`;

export const ServicesDescriptionBackgroundMobile = styled.img`
  display: none;
  position: relative;
  width: 100%;
  margin-top: -46%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${Breakpoints.mobile}) {
    display: block;
    margin-top: -50vh;
  }
`;

export const StaffAugmentation = styled.div`
  position: absolute;
  left: 100px;
  bottom: 25%;
  color: ${({ theme }) => theme.SECONDARY_COLOR_DARK_5};
  font-family: 'Roboto Thin';
  font-size: ${Title.SIZE_4};
  span {
    font-family: 'Roboto Light';
    font-weight: ${FontWeight.bold};
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
  }
  p {
    max-width: 53ch;
    margin: 0;
    font-size: ${Subtitle.SIZE_1};
    font-family: 'Roboto Light';
    margin-left: 70px;
    text-align: justify;
    line-height: 35px;
  }
  @media (max-width: ${Breakpoints.desktop}) {
    left: 50px;
    bottom: 30%;
    p {
      margin-left: 70px;
      max-width: 43ch;
    }
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: ${Title.SIZE_5};
    bottom: 30%;
    p {
      margin-left: 30px;
      max-width: 40ch;
      font-size: ${Subtitle.SIZE_3};
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    left: 50px;
    font-family: 'Roboto Light';
    font-size: ${Subtitle.SIZE_1};
    p {
      margin: 0;
      line-height: 28px;
      font-size: ${TextBody.SIZE_2};
      margin-left: 0;
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${TextBody.SIZE_3};
    left: 20px;
    bottom: 50%;
    p {
      font-size: ${TextBody.SIZE_4};
      line-height: 30px;
    }
  }
  @media (min-width: 33.74rem) and (max-width: ${Breakpoints.mobile}) and (min-height: 45rem) {
    bottom: 30%;
  }
`;

export const ServicesExplanation = styled.div`
  position: absolute;
  padding: 3.125rem 5rem;
  padding-bottom: 7rem;
  width: 60%;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 50%);
  background: linear-gradient(
    184.05deg,
    ${({ theme }) => theme.TERTIARY_COLOR_DARK_5} -118.41%,
    ${({ theme }) => theme.SECONDARY_COLOR_DARK_3} 66.96%
  );
  z-index: 2;
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_2};
  font-family: 'Roboto Thin';
  h2 {
    font-size: 3rem;
    line-height: 3.5rem;
    span {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
    }
  }
  p {
    font-size: ${Subtitle.SIZE_3};
    line-height: 1.75rem;
    text-align: justify;
  }
  @media (max-width: ${Breakpoints.desktop}) {
    padding: ${Padding.SIZE_9};
    h2 {
      font-size: ${Title.SIZE_5};
    }
    p {
      font-size: ${Subtitle.SIZE_3};
    }
  }
  @media (max-width: ${Breakpoints.laptop}) {
    padding: ${Padding.SIZE_7};
    h2 {
      font-size: ${Title.SIZE_6};
    }
    p {
      font-size: ${Subtitle.SIZE_3};
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    width: 85%;
    padding: ${Padding.SIZE_8};
    h2 {
      font-size: ${Subtitle.SIZE_4};
    }
    p {
      font-size: ${TextBody.SIZE_1};
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${Padding.SIZE_3};
    h2 {
      font-size: ${TextBody.SIZE_3};
      line-height: 2rem;
    }
    p {
      font-size: ${TextBody.SIZE_4};
    }
  }
`;

export const LineSeparator = styled.div`
  width: 150px;
  height: 1px;
  margin: ${Margin.SIZE_5} 0;
  border: solid 3px #627d98;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_2};
  list-style-type: none;
  @media (max-width: ${Breakpoints.tablet}) {
    margin: ${Margin.SIZE_2} 0;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    border: solid 1px #627d98;
    width: 100px;
    margin: ${Margin.SIZE_2} 0;
  }
`;
