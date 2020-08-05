import styled from 'styled-components';
import { Alternatives } from 'styles/utilities/colors';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const Image = styled.div<{ cardImage: string }>`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ cardImage }) => cardImage});
  width: 100%;
  height: 25rem;
  border: 0;
  z-index: 0;
`;

export const ChangeColorContainer = styled.div`
  position: absolute;
  background-color: ${Alternatives.LIGHT_SLATE_GREY};
  opacity: 0.9;
  width: 31.25rem;
  height: 25rem;
  border: 0;
  z-index: 1;
  word-wrap: break-word;
  transition: width 1s linear 0s;
  overflow: hidden;
  transition: all 1s;
  @media (max-width: ${Breakpoints.mobile}) {
    width: 21.25rem;
  }
`;

export const CardContainer = styled.div`
  min-width: 31.25rem;
  margin: 4rem 1rem;
  transition: all 2s;
  &:nth-child(3) {
    margin-bottom: 1000px;
    color: red !important;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    min-width: 21.25rem;
  }
`;
