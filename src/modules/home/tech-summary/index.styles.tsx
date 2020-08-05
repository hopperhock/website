import { Title, Subtitle } from '../../../styles/utilities/font-sizes';
import styled, { css } from 'styled-components';
import { Images } from 'shared/constants/assets';
import { Margin } from 'styles/utilities/gutters';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const TechContainer = styled.div`
  position: relative;
  height: 150vh;
  margin-top: -5%;
  background-image: url(${Images.STACK_SECTION_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${Breakpoints.laptop}) {
    margin-top: -10%;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: -18%;
  }
`;

const baseTittles = css`
  text-align: left;
  font-size: ${Title.SIZE_4};
  display: inline-block;
  margin: ${Margin.SIZE_5} ${Margin.SIZE_0} ${Margin.SIZE_0} ${Margin.SIZE_0};
  @media (max-width: ${Breakpoints.mobile}) {
    text-align: center;
    font-size: ${Subtitle.SIZE_4};
    margin: ${Margin.SIZE_7} ${Margin.SIZE_0} ${Margin.SIZE_3} ${Margin.SIZE_0};
  }
`;

export const StackTitleLight = styled.span`
  ${baseTittles}
  margin-left: ${Margin.SIZE_10};
  margin-top: ${Margin.SIZE_13};
  font-family: 'Roboto', helvetica;
  color: ${({ theme }) => theme.WHITE};
  @media (max-width: ${Breakpoints.mobile}) {
    margin-left: ${Margin.SIZE_2};
  }
`;

export const StackTitleBold = styled.span`
  ${baseTittles}
  font-family: 'Roboto Bold', helvetica;
  text-transform: uppercase;
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_2};
`;

export const StackContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 10%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 120px 10%;

  @media (max-width: ${Breakpoints.laptop}) {
    grid-template-columns: auto auto auto;
    grid-gap: 120px 10%;
  }

  > img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
`;
