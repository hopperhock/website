import { Subtitle } from '../../../styles/utilities/font-sizes';
import styled from 'styled-components';
import { Title } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  padding: 5%;
  padding-top: 200px;
  background-image: linear-gradient(
    205deg,
    ${({ theme }) => theme.SECONDARY_COLOR_DARK_1} 50%,
    ${({ theme }) => theme.BLACK} 100%
  );
`;

export const HeaderTitle = styled.p`
  margin-top: 3em;
  font-family: 'Roboto Light', helvetica;
  font-size: ${Title.SIZE_4};
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_4};
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Subtitle.SIZE_4};
  }
`;

export const WorkStepsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > img {
    width: 20%;
    margin: 0% 5%;
    @media (max-width: ${Breakpoints.tablet}) {
      width: 33%;
      margin: 0% 0%;
    }
  }
`;
