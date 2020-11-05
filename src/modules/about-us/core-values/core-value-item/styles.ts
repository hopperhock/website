import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { FontWeight, Title } from 'styles/utilities/font-sizes';

export const ValueItem = styled.div`
  margin: 110px 110px 0 110px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${p => p.theme.SECONDARY_COLOR_LIGHT_3};

  @media (max-width: ${Breakpoints.laptop}) {
    margin: 70px 70px 0 70px;
  }
`;

export const ValueTitle = styled.h3`
  font-weight: ${FontWeight.bold};
  font-size: ${Title.SIZE_5};
  color: ${p => p.theme.WHITE};
`;

export const ValueContent = styled.span`
  color: ${p => p.theme.SECONDARY_COLOR_LIGHT_4};
  margin-left: 30px;
  display: block;
  word-wrap: break-word;
  max-width: 300px;
`;
