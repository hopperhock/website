import styled, { keyframes } from 'styled-components';
import ServicesDescriptionBackground from 'styles/illustrations/ServicesDescriptionBackground';
import { Title, FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Margin, Padding } from 'styles/utilities/gutters';
import { Images } from 'shared/constants/assets';

export const Container = styled.div`
  position: relative;
  flex: 1.3 auto;
  padding: ${Padding.SIZE_4};
  background: url(${Images.CONTACT_US_BANNER}) no-repeat;
  background-size: cover;
`;

export const ContactUsInformationTitle = styled.div`
  width: auto;
  position: relative;
  top: 20%;
  left: 5%;
  max-width: 17ch;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  font-family: 'Roboto Bold', 'Helvetica';
  font-size: ${Title.SIZE_1};
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: ${Subtitle.SIZE_3};
  }
`;
