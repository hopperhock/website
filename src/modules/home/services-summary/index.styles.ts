import { Subtitle } from './../../../styles/utilities/font-sizes';
import styled, { css } from 'styled-components';
import { Title } from 'styles/utilities/font-sizes';
import { Margin } from 'styles/utilities/gutters';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.SECONDARY_COLOR_DARK_1} 38%, ${theme.SECONDARY_COLOR_DARK_2} 64%, ${theme.TERTIARY_COLOR_DARK_1} 100%)`};
  scroll-snap-align: start;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const baseTittles = css`
  font-family: 'Roboto Bold', helvetica;
  text-transform: uppercase;
  text-align: center;
`;

export const HeaderTitle = styled.p`
  ${baseTittles}
  font-size: ${Subtitle.SIZE_3};
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_3};
  margin-top: 11rem;
`;

export const HeaderSubtitle = styled.p`
  ${baseTittles}
  font-size: ${Title.SIZE_6};
  color: ${({ theme }) => theme.WHITE};
`;
