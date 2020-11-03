import styled from 'styled-components';
import { Subtitle } from 'styles/utilities/font-sizes';
import { hexToRGB } from 'styles/utilities/funtions';
import { Margin, Padding } from 'styles/utilities/gutters';
import { Breakpoints } from '../../../../../styles/utilities/breakpoints';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 ${Padding.SIZE_5};
  max-height: 471px;
  padding: ${Padding.SIZE_5};
  backdrop-filter: blur(2px);
  background-color: ${({ theme }) => hexToRGB(theme.SECONDARY_COLOR_LIGHT_3, '0.34')};

  @media (max-width: ${Breakpoints.laptop}) {
    margin: 0 ${Padding.SIZE_1};
  }
`;

export const Title = styled.span`
  font-size: ${Subtitle.SIZE_1};
  font-weight: bold;
  line-height: 1.5;
  color: ${({ theme }) => theme.WHITE};
`;

export const SubTitle = styled.span`
  font-family: 'Roboto Thin';
  font-size: ${Subtitle.SIZE_4};
  font-style: italic;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.WHITE};
`;

export const Rectangle = styled.div`
  margin-top: ${Margin.SIZE_3};
  width: 55px;
  height: 4px;
  background-color: ${({ theme }) => theme.SECONDARY_COLOR_DARK_1};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: ${Padding.SIZE_3}
`;
