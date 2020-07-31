import { Subtitle } from '../../../styles/utilities/font-sizes';
import styled, { css } from 'styled-components';
import { Padding, Margin } from 'styles/utilities/gutters';
import { TextBody } from 'styles/utilities/font-sizes';

export const CardContainer = styled.div`
  min-width: 500px;
  margin: 4rem auto;
`;

export const Image = styled.div<{ cardImage: string }>`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ cardImage }) => cardImage});
  width: 100%;
  height: 400px;
  border: 0;
  z-index: 1;
`;

export const ChangeColorContainer = styled.div`
  position: absolute;
  background-color: lightslategrey;
  opacity: 0.9;
  width: 500px;
  height: 400px;
  border: 0;
  z-index: 2;
  word-wrap: break-word;
`;

export const ServiceTitle = styled.p`
  font-family: roboto bold;
  font-size: 70px;
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_4};
  line-height: 45px;
  text-align: center;
  vertical-align: bottom;
  margin: 6rem auto;
`;
