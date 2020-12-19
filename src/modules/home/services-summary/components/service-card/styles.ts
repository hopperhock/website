import { Subtitle, Title, TextBody } from '../../../../../styles/utilities/font-sizes';
import styled from 'styled-components';
import { Margin } from 'styles/utilities/gutters';
import { ChangeColorContainer } from 'shared/components/Card/styles';
import { Globals, Alternatives } from 'styles/utilities/colors';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { hexToRGB } from 'styles/utilities/funtions';

export const ServiceTitle = styled.p`
  font-family: roboto bold;
  max-width: 12ch;
  font-size: 4.375rem;
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_4};
  line-height: 2.8125rem;
  text-align: center;
  vertical-align: bottom;
  margin: 6rem auto;
  transition: all 0.8s;
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2.375rem;
    line-height: 1.40625rem;
  }
`;

export const ServicesDivider = styled.hr`
  border-color: ${({ theme }) => theme.WHITE};
  height: 0.125rem;
  width: 80%;
  display: none;
  transition: all 0.8s;
`;

export const CardDescriptioner = styled.p`
  max-width: 30ch;
  margin: ${Margin.SIZE_5} auto;
  font-size: ${Subtitle.SIZE_4};
  color: ${({ theme }) => theme.WHITE};
  text-align: center;
  width: 90%;
  opacity: 0;
  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${TextBody.SIZE_2};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  transition-delay: 0.1s;
  position: absolute;
  width: 100%;
  visibility: hidden;
  bottom: 10%;
`;

export const Divider = styled.hr`
  display: flex;
  flex-direction: wrap;
  visibility: hidden;
`;

export const Containers = styled.div`
 & ${ChangeColorContainer} {
    @media (max-width: ${Breakpoints.mobile}) {
      position: absolute;
      margin-left: 8.1rem;
      width: 23.25rem;
      background-color: ${({ theme }) => hexToRGB(theme.BLACK, '0.8')};
      margin-left: 0rem;
      width: 21.25rem;
    }
    @media (max-width: ${Breakpoints.tablet}) {
      position: absolute;
      margin-left: 8.1rem;
      width: 23.25rem;
      background-color: ${({ theme }) => hexToRGB(theme.BLACK, '0.8')};
      margin-left: 0rem;
      width: 21.25rem;
    }
    @media (max-width: ${Breakpoints.tabletXL}) {
      position: absolute;
      margin-left: 8.1rem;
      width: 23.25rem;
      background-color: ${({ theme }) => hexToRGB(theme.BLACK, '0.8')};
      margin-left: 0rem;
      width: 21.25rem;
    }
  }
  &:hover ${ChangeColorContainer} {
    position: absolute;
    margin-left: 8.1rem;
    width: 23.25rem;
    background-color: ${({ theme }) => hexToRGB(theme.BLACK, '0.8')};
    @media (max-width: ${Breakpoints.mobile}) {
      margin-left: 0rem;
      width: 21.25rem;
    }
  }
   & ${ServiceTitle} {
     @media (max-width: ${Breakpoints.mobile}) {
      margin: 3rem auto;
      line-height: 1.875rem;
      top: 0rem;
      font-size: ${Title.SIZE_6};
      color: ${Globals.WHITE};
    }
    @media (max-width: ${Breakpoints.tablet}) {
      margin: 3rem auto;
      line-height: 1.875rem;
      top: 0rem;
      font-size: ${Title.SIZE_6};
      color: ${Globals.WHITE};
    }
    @media (max-width: ${Breakpoints.tabletXL}) {
      margin: 3rem auto;
      line-height: 1.875rem;
      top: 0rem;
      font-size: ${Title.SIZE_6};
      color: ${Globals.WHITE};
    }
  }
  &:hover ${ServiceTitle} {
    margin: 3rem auto;
    line-height: 1.875rem;
    top: 0rem;
    font-size: ${Title.SIZE_6};
    color: ${Globals.WHITE};
  }
  & ${ServicesDivider} {
    @media (max-width: ${Breakpoints.mobile}) {
      display: inherit;
    } 
    @media (max-width: ${Breakpoints.tablet}) {
      display: inherit;
    } 
    @media (max-width: ${Breakpoints.tabletXL}) {
      display: inherit;
    } 
  }
  &:hover ${ServicesDivider} {
    display: inherit;
  }
  & ${CardDescriptioner} {
    @media (max-width: ${Breakpoints.mobile}) {
      opacity: 1;
      transition: opacity 2s;
    } 
     @media (max-width: ${Breakpoints.tablet}) {
      opacity: 1;
      transition: opacity 2s;
    } 
     @media (max-width: ${Breakpoints.tabletXL}) {
      opacity: 1;
      transition: opacity 2s;
    } 
  }
  &:hover ${CardDescriptioner} {
    opacity: 1;
    transition: opacity 2s;
  }
  & ${ButtonContainer} {
    @media (max-width: ${Breakpoints.mobile}) {
      transition: visibility 1s linear, opacity 1s linear;
      transition-delay: 0.1s;
      visibility: visible;
      opacity: 1;
    } 
    @media (max-width: ${Breakpoints.tablet}) {
      transition: visibility 1s linear, opacity 1s linear;
      transition-delay: 0.1s;
      visibility: visible;
      opacity: 1;
    } 
    @media (max-width: ${Breakpoints.tabletXL}) {
      transition: visibility 1s linear, opacity 1s linear;
      transition-delay: 0.1s;
      visibility: visible;
      opacity: 1;
    } 
  }
  &:hover ${ButtonContainer} {
    transition: visibility 1s linear, opacity 1s linear;
    transition-delay: 0.1s;
    visibility: visible;
    opacity: 1;
  }
`;

