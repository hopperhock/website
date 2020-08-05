import styled from 'styled-components';
import { TextBody } from 'styles/utilities/font-sizes';
import { Margin, Padding } from 'styles/utilities/gutters';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  align-items: center;
  margin: 0 ${Margin.SIZE_13};
  @media (max-width: ${Breakpoints.desktop}) {
    margin: 0 ${Margin.SIZE_8};
  }
  @media (max-width: ${Breakpoints.tablet}) {
    margin: 0 ${Margin.SIZE_6};
  }
  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }
`;

export const NavLink = styled.a<{ transparent: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 ${Padding.SIZE_7};
  font-size: ${TextBody.SIZE_2};
  color: ${({ theme, transparent }) => (transparent ? theme.SECONDARY_COLOR_LIGHT_1 : theme.SECONDARY_COLOR_DARK_1)};
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    border-top: 1px solid ${({ theme, transparent }) => (transparent ? theme.WHITE : theme.PRIMARY_COLOR_DARK_3)};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    font-size: ${TextBody.SIZE_3};
    padding: 0 ${Padding.SIZE_4};
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: ${TextBody.SIZE_1};
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0 ${Padding.SIZE_3};
  }
`;
