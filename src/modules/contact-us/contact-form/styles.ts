import styled, { keyframes } from 'styled-components';
import ServicesDescriptionBackground from 'styles/illustrations/ServicesDescriptionBackground';
import { Title, FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Margin, Padding } from 'styles/utilities/gutters';
import { Images } from 'shared/constants/assets';

export const Container = styled.div`
  padding: ${Padding.SIZE_4};
  flex: auto;
  background: url(${Images.CONTACT_US_FORM}) no-repeat;
  background-size: cover;
`;
