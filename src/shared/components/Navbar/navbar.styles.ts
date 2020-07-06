import styled from 'styled-components';
import { hexToRGB } from 'styles/utilities/funtions';

import { Margin, Padding, Spacing } from 'styles/utilities/gutters';
import { TextBody } from 'styles/utilities/font-sizes';
import { backgroundFadeIn } from 'styles/utilities/animations';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const Nav = styled.div`
  position: fixed;
  background-color: ${({ theme }) => hexToRGB(theme.SECONDARY_COLOR_LIGHT_1, '0')};
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  height: 5.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${Spacing.SIZE_13};
  &[aria-transparent='false'] {
    animation: ${({ theme }) => backgroundFadeIn(theme.SECONDARY_COLOR_LIGHT_1)} 0.35s ease-in-out 0s 1;
    background-color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_1};
  }
  .brand {
    height: 95%;
    padding: ${Padding.SIZE_1};
    margin-top: ${Margin.SIZE_1};
    .hopperhock-logo_svg__logo,
    .hopperhock-logo_svg__name {
      fill: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};
    }
  }
  .nav-links {
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0 ${Margin.SIZE_13};
  }
  .nav-link {
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
  }
  .nav-action {
    border: 0;
    border-radius: 25px;
    outline: inherit;
    color: inherit;
    font-size: ${TextBody.SIZE_4};
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${Padding.SIZE_4} ${Padding.SIZE_6};
    background-color: ${({ theme }) => theme.SUCCESS};
    letter-spacing: 2px;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => hexToRGB(theme.SUCCESS, '0.8')};
    }
  }
  @media (max-width: ${Breakpoints.desktop}) {
    padding: 0 ${Padding.SIZE_10};
    height: 5rem;
    .nav-links {
      margin: 0 ${Margin.SIZE_8};
    }
    .nav-link {
      font-size: ${TextBody.SIZE_3};
      padding: 0 ${Padding.SIZE_4};
    }
    .nav-action {
      font-size: ${TextBody.SIZE_5};
      padding: ${Padding.SIZE_3} ${Padding.SIZE_5};
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0 ${Spacing.SIZE_2};
    height: 4.5rem;
    .nav-links {
      margin: 0 ${Margin.SIZE_6};
    }
    .nav-link {
      padding: 0 ${Padding.SIZE_3};
    }
    .nav-action {
      font-size: ${TextBody.SIZE_5};
      letter-spacing: 1px;
    }
  }
`;
