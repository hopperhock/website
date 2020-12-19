import styled from 'styled-components';
import { HopperhockLogo } from 'styles/illustrations/HopperhockLogo';
import { TextBody, FontWeight } from 'styles/utilities/font-sizes';
import { Margin, Padding, Spacing } from 'styles/utilities/gutters';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { backgroundFadeIn } from 'styles/utilities/animations';
import { hexToRGB } from 'styles/utilities/funtions';
import { Subtitle } from 'styles/utilities/font-sizes';

export default styled.nav<{ transparent: boolean }>`
  position: fixed;
  background-color: ${({ theme }) => hexToRGB(theme.WHITE, '0')};
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  height: 6.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${Spacing.SIZE_13};
  z-index: 3;
  &[data-transparent='false'] {
    animation: ${({ theme }) => backgroundFadeIn(theme.WHITE)} 0.35s ease-in-out 0s 1;
    background-color: ${({ theme }) => theme.WHITE};
    border-bottom: 1px solid ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_2};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    padding: 0 ${Padding.SIZE_8};
    height: 6rem;
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    height: 8.5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    height: 6rem;
    padding: 0 ${Padding.SIZE_3};
  }
  @media (max-width: ${Breakpoints.mobile}) {
    height: 5rem;
  }
`;

export const Brand = styled(HopperhockLogo)`
  height: 6.5rem;
  padding: ${Padding.SIZE_1};
  margin-top: ${Margin.SIZE_2};
  path {
    fill: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    height: 8.5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    height: 6.5rem;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    height: 5rem;
  }
`;

export const BookCallButton = styled.a<{ transparent: boolean }>`
  background-color: ${({ theme, transparent }) => (transparent ? 'inherit' : theme.PRIMARY_COLOR_DARK_1)};
  border: ${({ theme, transparent }) => (transparent ? `1px solid ${theme.SUCCESS}` : 'none')};
  outline: inherit;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  font-size: ${TextBody.SIZE_4};
  font-weight: ${FontWeight.medium};
  margin-left: auto;
  padding: ${Padding.SIZE_3} ${Padding.SIZE_8};
  text-decoration: none ;
  font-size: ${TextBody.SIZE_4};
  cursor: pointer;
  :hover {
    background-color: ${({ theme, transparent }) =>
      hexToRGB(transparent ? theme.SUCCESS : theme.PRIMARY_COLOR_DARK_1, '0.8')};
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    display: none;
  }
`;

export const ToggleButton = styled.button<{ transparent: boolean }>`
  display: none;
  width: 5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding-top: ${Padding.SIZE_0};
  padding-bottom: ${Padding.SIZE_0};
  vertical-align: middle;
  :focus {
    outline: none;
  }
  span {
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme, transparent }) => (transparent ? theme.WHITE : theme.BLACK)};
    margin: ${Margin.SIZE_2} ${Margin.SIZE_0};
  }
  @media (max-width: ${Breakpoints.tabletXL}) {
    display: block;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    width: 4rem;
    span {
      margin: 0.7rem ${Margin.SIZE_0};
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    width: 3rem;
    span {
      margin: ${Margin.SIZE_1} ${Margin.SIZE_0};
    }
  }
`;

export const LanguageText = styled.span<{ transparent: boolean }>`
  margin-left: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};

  @media (max-width: ${Breakpoints.tabletXL}) {
    display: none;
  }
`;
