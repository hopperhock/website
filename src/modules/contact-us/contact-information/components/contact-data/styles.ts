import { FontWeight } from './../../../../../styles/utilities/font-sizes';
import { Margin } from 'styles/utilities/gutters';
import { Subtitle, Title, TextBody } from '../../../../../styles/utilities/font-sizes';
import styled from 'styled-components';
import { ChangeColorContainer } from 'shared/components/Card/styles';
import { Globals } from 'styles/utilities/colors';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { hexToRGB } from 'styles/utilities/funtions';

export const Container = styled.p`
  position: relative;
  margin-top: ${Margin.SIZE_1};
`;

export const ContactTitle = styled.p`
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
  font-weight: ${FontWeight.bold};
  font-size: ${TextBody.SIZE_3};
  margin-top: ${Margin.SIZE_1};
  color: ${({ theme }) => theme.PRIMARY_COLOR_LIGHT_2};
`;

export const ContactData = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: ${TextBody.SIZE_3};
  color: ${({ theme }) => theme.WHITE};
`;
