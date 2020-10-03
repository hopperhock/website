import styled from 'styled-components';
import { FontWeight, Subtitle, TextBody, Title } from 'styles/utilities/font-sizes';
import { hexToRGB } from 'styles/utilities/funtions';
import { Slider, Slide, Dot } from 'pure-react-carousel';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Padding } from 'styles/utilities/gutters';

export default styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin-top: -20vh;
  @media (max-width: ${Breakpoints.tabletXL}) {
    margin-top: -25vh;
    height: auto;
    flex-direction: column;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: -25vh;
    flex-direction: column;
  }
`;

export const FoundersContainer = styled(Slider)`
  width: 50%;
  @media (max-width: ${Breakpoints.tabletXL}) {
    width: 100%;
    height: 60vh;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    height: auto;
  }
`;

export const Founder = styled(Slide)<{ photo: string }>`
  position: relative;
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center center;
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
`;

export const FounderInformation = styled.div`
  position: absolute;
  top: 20rem;
  left: 10rem;
  h2 {
    font-family: Roboto;
    color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
    font-size: 48px;
    line-height: 62px;
    letter-spacing: 3px;
    margin: 0;
  }
  h3,
  h5 {
    color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_1};
    font-family: Roboto Light;
    font-weight: ${FontWeight.light};
    margin: 0;
    letter-spacing: 1.2px;
    text-align: right;
  }
  h3 {
    font-size: 42px;
  }
  h5 {
    font-size: 28px;
  }
  @media (max-width: ${Breakpoints.desktop}) {
    top: 10rem;
    left: 5rem;
    h2 {
      font-size: 42px;
    }
    h3 {
      font-size: 36px;
    }
    h5 {
      font-size: 26px;
    }
  }
  @media (max-width: ${Breakpoints.laptop}) {
    h2 {
      font-size: 38px;
    }
    h3 {
      font-size: 34px;
    }
    h5 {
      font-size: 22px;
    }
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    top: 15rem;
    left: 5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    top: 10rem;
    left: 5rem;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    top: 5rem;
    left: 1.5rem;
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
    h5 {
      font-size: 12px;
    }
  }
`;

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  padding-left: 7.5rem;
  @media (max-width: ${Breakpoints.desktop}) {
    padding-top: 5rem;
    padding-left: 2.5rem;
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    height: auto;
    width: 100%;
    padding: 4rem 3.5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 3rem 2.5rem;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

export const DescriptionHeading = styled.div`
  font-family: 'Roboto Light';
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 1.2px;
  color: #a5b4c2;
  span {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
  }
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const FounderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem 0;
  @media (max-width: ${Breakpoints.desktop}) {
    justify-content: flex-start;
  }
  @media (max-width: ${Breakpoints.laptop}) {
    margin: 4rem 0;
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    justify-content: center;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    justify-content: flex-start;
    margin: 2rem 0;
  }
`;

export const FounderIcon = styled(Dot)<{ photo: string; active: string }>`
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 6.25rem;
  height: 6.25rem;
  margin: 0 1.5rem;
  border-radius: 100px;
  border-style: solid;
  border-color: ${({ theme, active }) => (active === 'true' ? theme.TERTIARY_COLOR_DARK_3 : 'transparent')};
  outline: none;
  :active :focus {
    border: none;
  }
  @media (max-width: ${Breakpoints.laptop}) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    width: 7rem;
    height: 7rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    width: 3rem;
    height: 3rem;
    margin: 0;
    margin-right: 2rem;
  }
`;

export const FounderDescription = styled.p`
  font-family: Helvetica;
  font-size: 24px;
  line-height: 28px;
  text-align: justify;
  letter-spacing: 0.6px;
  color: #3a3a3a;
  margin: 0;
  margin-right: 5rem;
  @media (max-width: ${Breakpoints.desktop}) {
    font-size: 22px;
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: 20px;
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    font-size: 32px;
    line-height: 38px;
    margin-right: 0;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    line-height: 28px;
    font-size: 20px;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const ActionButton = styled.button`
  margin: auto;
  margin-bottom: 5rem;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
  width: 17rem;
  border: none;
  outline: inherit;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  font-size: ${TextBody.SIZE_1};
  font-weight: ${FontWeight.medium};
  padding: ${Padding.SIZE_3} ${Padding.SIZE_8};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => hexToRGB(theme.PRIMARY_COLOR_DARK_1, '0.8')};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    padding: ${Padding.SIZE_3} ${Padding.SIZE_5};
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: ${TextBody.SIZE_2};
    margin-bottom: 2rem;
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    font-size: ${Subtitle.SIZE_1};
    padding: ${Padding.SIZE_5} ${Padding.SIZE_5};
    margin-top: 5rem;
    letter-spacing: 0.0625rem;
    width: 25rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    width: 17rem;
    padding: ${Padding.SIZE_3} ${Padding.SIZE_5};
    font-size: ${TextBody.SIZE_1};
  }
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${TextBody.SIZE_4};
    margin-top: 2rem;
    width: 100%;
  }
`;
