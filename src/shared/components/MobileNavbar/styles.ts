import styled from 'styled-components';
import { HopperhockLogo } from 'styles/illustrations/HopperhockLogo';
import { Margin, Padding } from 'styles/utilities/gutters';
import { TextBody, FontWeight } from 'styles/utilities/font-sizes';
import { slideIn, slideOut } from 'styles/utilities/animations';
import { Breakpoints } from 'styles/utilities/breakpoints';

type Props = {
  visible: boolean;
};

const MobileNav = styled.div<Props>`
  display: none;
  flex-direction: column;
  align-items: center;
  position: fixed;
  visibility: hidden;
  z-index: 11;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.WHITE};
  width: 80%;
  height: 100vh;
  margin-top: ${Margin.SIZE_0};
  transform: translate3d(-100%, 0, 0);
  -webkit-animation: ${({ visible }) => (visible ? slideIn : slideOut)} 0.5s forwards;
  animation: ${({ visible }) => (visible ? slideIn : slideOut)} 0.5s forwards;
  ul {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    list-style: none;
    padding: ${Padding.SIZE_0};
  }
  li {
    width: 100%;
    padding: ${Padding.SIZE_5} 0;
    border-bottom: 1px solid ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_2};
    text-align: center;
    font-size: ${TextBody.SIZE_3};
    font-weight: ${FontWeight.medium};
    text-decoration: none;
    color: ${({ theme }) => theme.TEXT_COLOR};
    letter-spacing: 2px;
    :focus,
    :hover,
    :active {
      background-color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_1};
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    display: flex;
  }
`;

export const Brand = styled(HopperhockLogo)`
  height: 85px;
  margin-top: ${Margin.SIZE_2};
  path {
    fill: ${({ theme }) => theme.TEXT_COLOR};
  }
`;

export const MobileNavFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.TEXT_COLOR};
  margin: auto ${Margin.SIZE_2};
  text-align: center;
  letter-spacing: 1px;
  line-height: 25px;
  font-size: ${TextBody.SIZE_3};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    font-weight: ${FontWeight.bold};
  }
`;

export const LanguageText = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
  text-decoration: underline;
  margin-top: ${Margin.SIZE_3};
  color: ${({ theme }) => theme.TEXT_COLOR};
`;

export default MobileNav;
