import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Title, FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Margin } from 'styles/utilities/gutters';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 900px;
  background: ${({ theme }) => theme.WHITE};
  padding: 114px 130px;
  @media (max-width: ${Breakpoints.laptop}) {
    padding: 80px 86px;
    height: 700px;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 60px 66px;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    padding: 40px 46px;
    height: auto;
  }
`;

export const CapabilitiesHeading = styled.div`
  color: ${({ theme }) => theme.SECONDARY_COLOR_DARK_5};
  font-size: ${Title.SIZE_4};
  max-width: 20ch;
  span {
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    font-family: roboto bold;
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: ${Title.SIZE_5};
  }
  @media (max-width: ${Breakpoints.tablet}) {
  }
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Subtitle.SIZE_3};
  }
`;

export const LineSeparator = styled.div`
  width: 150px;
  height: 1px;
  margin-top: ${Margin.SIZE_5};
  border: solid 3px #627d98;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_2};
  list-style-type: none;
  @media (max-width: ${Breakpoints.mobile}) {
    border: solid 1px #627d98;
    width: 100px;
  }
`;

export const Capabilities = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 124px;
  padding: 0;
  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 50px;
    flex-wrap: wrap;
  }
`;

export const Service = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: ${Margin.SIZE_5};
  img {
    width: 80%;
  }
  span {
    font-family: 'Roboto Thin';
    font-size: ${Subtitle.SIZE_2};
    margin-top: ${Margin.SIZE_4};
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    text-align: center;
    max-width: 10ch;
  }
  @media (max-width: ${Breakpoints.laptop}) {
    img {
      height: 60px;
      width: 70px;
    }
    span {
      font-family: 'Roboto Light';
      font-size: ${Subtitle.SIZE_1};
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    img {
      height: 60px;
      width: 100%;
    }
    span {
      font-family: 'Roboto Light';
      font-size: ${TextBody.SIZE_1};
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    img {
      height: 60px;
      width: 70px;
    }
    span {
      margin: ${Margin.SIZE_2} 0px;
      font-size: ${TextBody.SIZE_4};
    }
  }
`;
