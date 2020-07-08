import styled from 'styled-components';
import { HopperhockLogo } from 'styles/illustrations/HopperhockLogo';
import { TextBody, FontWeight } from 'styles/utilities/font-sizes';
import { Margin, Padding, Spacing } from 'styles/utilities/gutters';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { backgroundFadeIn } from 'styles/utilities/animations';
import { hexToRGB } from 'styles/utilities/funtions';

export const Nav = styled.div<{ transparent: boolean }>`
  position: fixed;
  background-color: ${({ theme }) => hexToRGB(theme.WHITE, '0')};
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  height: 5.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${Spacing.SIZE_13};
  &[aria-transparent='false'] {
    animation: ${({ theme }) => backgroundFadeIn(theme.WHITE)} 0.35s ease-in-out 0s 1;
    background-color: ${({ theme }) => theme.WHITE};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    padding: 0 ${Padding.SIZE_10};
    height: 5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0 ${Padding.SIZE_3};
    height: 4.5rem;
  }
`;

export const Brand = styled(HopperhockLogo)`
  height: 95%;
  padding: ${Padding.SIZE_1};
  margin-top: ${Margin.SIZE_1};
  path {
    fill: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 ${Margin.SIZE_13};
  @media (max-width: ${Breakpoints.desktop}) {
    margin: 0 ${Margin.SIZE_8};
  }
  @media (max-width: ${Breakpoints.tablet}) {
    margin: 0 ${Margin.SIZE_6};
  }
`;

export const NavLink = styled.div<{ transparent: boolean }>`
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
    border-top: 1px solid
      ${({ theme, transparent }) => (transparent ? theme.SECONDARY_COLOR_LIGHT_1 : theme.PRIMARY_COLOR_DARK_3)};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    font-size: ${TextBody.SIZE_3};
    padding: 0 ${Padding.SIZE_4};
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0 ${Padding.SIZE_3};
  }
`;

export const NavAction = styled.div<{ transparent: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme, transparent }) => hexToRGB(theme.SUCCESS, transparent ? '1' : '0.5')};
  outline: inherit;
  color: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};
  font-size: ${TextBody.SIZE_4};
  font-weight: ${FontWeight.medium};
  letter-spacing: 2px;
  margin-left: auto;
  padding: ${Padding.SIZE_3} ${Padding.SIZE_4};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => hexToRGB(theme.SUCCESS, '0.1')};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    font-size: ${TextBody.SIZE_5};
    padding: ${Padding.SIZE_3} ${Padding.SIZE_5};
  }
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: ${TextBody.SIZE_5};
    letter-spacing: 1px;
  }
`;
