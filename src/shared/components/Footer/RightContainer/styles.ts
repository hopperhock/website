import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { TextBody } from 'styles/utilities/font-sizes';
import { Padding } from 'styles/utilities/gutters';

export const Container = styled.div`
  display: flex;
  flex: 7;
  justify-content: space-around;

  @media (max-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const NavLink = styled.a`
  font-family: roboto bold;
  display: flex;
  align-items: center;
  padding: ${Padding.SIZE_2} 0;
  font-size: ${TextBody.SIZE_2};
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
`;
