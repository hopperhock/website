import { Subtitle } from '../../../styles/utilities/font-sizes';
import styled, { css } from 'styled-components';
import { Title } from 'styles/utilities/font-sizes';
import { Margin } from 'styles/utilities/gutters';
import Button from 'shared/components/Button';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.SECONDARY_COLOR_DARK_1} 38%, ${theme.SECONDARY_COLOR_DARK_2} 64%, ${theme.TERTIARY_COLOR_DARK_1} 100%)`};
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
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
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Subtitle.SIZE_4};
  }
`;

export const HeaderSubtitle = styled.p`
  ${baseTittles}
  font-size: ${Title.SIZE_6};
  color: ${({ theme }) => theme.WHITE};
  margin: ${Margin.SIZE_1}  ${Margin.SIZE_0} ${Margin.SIZE_7} ${Margin.SIZE_0} ;
  @media (max-width: ${Breakpoints.mobile}) {
      font-size: ${Subtitle.SIZE_1};
  }
`;

export const ServiceTitle = styled.p`
  font-family: roboto bold;
  max-width: 12ch;
  font-size: 4.375rem;
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_4};
  line-height: 2.8125rem;
  text-align: center;
  vertical-align: bottom;
  margin: 6rem auto;
  transition: all 2s;
`;

export const ServicesDivider = styled.hr`
  border-color: ${({ theme }) => theme.WHITE};
  height: 0.125rem;
  width: 80%;
  display: none;
  transition: all 2s;
`;

export const CardDescriptioner = styled.p`
  max-width: 30ch;
  margin: ${Margin.SIZE_5} auto;
  font-size: ${Subtitle.SIZE_4};
  color: ${({ theme }) => theme.WHITE};
  text-align: center;
  width: 90%;
  opacity: 0;
`;
