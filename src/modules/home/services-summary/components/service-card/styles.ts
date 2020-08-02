import { Subtitle, Title, TextBody } from '../../../../../styles/utilities/font-sizes';
import styled from 'styled-components';
import { Margin } from 'styles/utilities/gutters';
import { ChangeColorContainer } from 'shared/components/Card/styles';
import { Globals } from 'styles/utilities/colors';
import { fadeInFromNone } from 'styles/utilities/animations';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const ServiceTitle = styled.p`
  font-family: roboto bold;
  max-width: 12ch;
  font-size: 4.375rem;
  color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_4};
  line-height: 2.8125rem;
  text-align: center;
  vertical-align: bottom;
  margin: 6rem auto;
  transition: all 2s;
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
  transition: all 2s;
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
  transition-delay: 0s;
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
  &:hover ${ChangeColorContainer} {
    position: absolute;
    margin-left: 8.1rem;
    width: 23.25rem;
    background-color: black;
    opacity: 0.8;
    @media (max-width: ${Breakpoints.mobile}) {
      margin-left: 0rem;
      width: 21.25rem;
    }
  }
  &:hover ${ServiceTitle} {
    margin: 3rem auto;
    line-height: 1.875rem;
    top: 0rem;
    font-size: ${Title.SIZE_6};
    color: ${Globals.WHITE};
  }
  &:hover ${ServicesDivider} {
    display: inherit;
  }
  &:hover ${CardDescriptioner} {
    opacity: 1;
    transition: opacity 5s;
  }
  &:hover ${ButtonContainer} {
    transition: visibility 10s linear, opacity 10s linear;
    transition-delay: 0.3s;
    visibility: visible;
    opacity: 1;
  }
`;
