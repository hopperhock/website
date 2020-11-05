import { Images } from 'shared/constants/assets';
import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { Title } from 'styles/utilities/font-sizes';

export const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Images.VALUES_BACKGROUND});
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const Header = styled.div`
  padding: 110px 110px 0 110px;
  font-family: 'Roboto';
  font-size: ${Title.SIZE_3};
  color: ${p => p.theme.SECONDARY_COLOR_LIGHT_4};
  span {
    font-family: 'Roboto Bold';
    color: ${p => p.theme.WHITE};
  }

  @media (max-width: ${Breakpoints.desktop}) {
    padding: 70px 70px 0 70px;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 15px;
`;
