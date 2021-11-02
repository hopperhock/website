import styled, { keyframes } from 'styled-components';
import ServicesDescriptionBackground from 'styles/illustrations/ServicesDescriptionBackground';
import { Title, FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Margin, Padding } from 'styles/utilities/gutters';
import { Images } from 'shared/constants/assets';
import { Children } from 'react';

export const Container = styled.div`
  position: relative;
  flex: 1.3 auto;
  padding: ${Padding.SIZE_10};
  background: url(${Images.CONTACT_US_BANNER}) no-repeat;
  background-size: cover;
`;

export const ContactUsInformationTitle = styled.div`
  width: auto;
  position: relative;
  top: 15%;
  left: 5%;
  max-width: 17ch;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  font-family: 'Roboto Bold', 'Helvetica';
  font-size: ${Title.SIZE_1};
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: ${Title.SIZE_6};
  }
  @media (max-width: ${Breakpoints.mobile}) {
    margin-bottom: 45%;
  }
`;

export const DataContainer = styled.div`
  position: relative;
  margin-top: 25%;
  left: 5%;
`;

export const DataSection = styled.div`
  position: relative;
  margin-top: 5%;
  :nth-child(3) {
    margin-top: 10%;
  }
`;

export const ContactTitle = styled.div`
  display: flex;

  h1 {
    text-transform: uppercase;
    font-family: Helvetica, sans-serif;
    font-weight: ${FontWeight.bold};
    font-size: ${TextBody.SIZE_3};
    margin-top: ${Margin.SIZE_1};
    color: ${({ theme }) => theme.PRIMARY_COLOR_LIGHT_2};
    @media (max-width: ${Breakpoints.mobile}) {
      font-size: ${TextBody.SIZE_4};
    }
  }
  span {
    position: relative;
    margin-top: 1.5%;
    margin-right: 10px;
    border-top: 0.115rem solid ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_3};
    width: 5%;
    left: 0px;
    @media (max-width: ${Breakpoints.mobile}) {
      margin-top: 3%;
    }
  }
`;

export const ContactData = styled.h4`
  font-family: Helvetica, sans-serif;
  font-size: ${TextBody.SIZE_3};
  color: ${({ theme }) => theme.WHITE};
  font-weight: ${FontWeight.light};
`;
