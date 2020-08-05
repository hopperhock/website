import { Margin } from './../../../styles/utilities/gutters';
import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const TitleDivider = styled.hr<{ color: string }>`
  position: absolute;
  margin-top: ${Margin.SIZE_5};
  left: 80px;
  border: 0.125rem solid ${({ color }) => color};
  width: 7%;
  @media (max-width: ${Breakpoints.mobile}) {
    visibility: hidden;
  }
`;
