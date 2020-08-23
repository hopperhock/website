import styled from 'styled-components';
import { Title, FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Margin } from 'styles/utilities/gutters';

export default styled.div`
  position: relative;
  width: 100%;
  @media (max-width: ${Breakpoints.mobile}) {
    height: 40vh;
  }
  @media (max-width: ${Breakpoints.mobile}) and (min-height: 50rem) {
    height: 20vh;
  }
`;

export const ServicesDescriptionBackground = styled.img`
  position: relative;
  width: 100%;
  margin-top: -46%;
  background-size: cover;
  background-repeat: no-repeat;
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
    bottom: 15%;
    p {
      margin-left: 70px;
      max-width: 43ch;
    }
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: ${Title.SIZE_5};
    bottom: 10%;
    p {
      margin-left: 30px;
      max-width: 40ch;
      font-size: ${Subtitle.SIZE_3};
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    left: 50px;
    font-family: 'Roboto Light';
    bottom: 10px;
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
    bottom: 15%;
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
  @media (max-width: ${Breakpoints.mobile}) {
    border: solid 1px #627d98;
    width: 100px;
    margin: ${Margin.SIZE_2} 0;
  }
`;
