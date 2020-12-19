import { Margin, Padding } from 'styles/utilities/gutters';
import { Subtitle, TextBody } from 'styles/utilities/font-sizes';

import { Breakpoints } from 'styles/utilities/breakpoints';
import styled from 'styled-components';

export const Container = styled.div<{ footerImageSource: string }>`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ footerImageSource }) => footerImageSource});
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.WHITE};
`;

export const SocialContainer = styled.div<{ socialImageSource: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex: 1;
  min-height: 160px;
  justify-content: space-between;
  align-items: center;
  background-image: url(${({ socialImageSource }) => socialImageSource});
  padding: ${Padding.SIZE_9} 120px;
  padding-bottom: ${Padding.SIZE_0};

  img {
    margin-right: ${Margin.SIZE_3};
    cursor: pointer;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column-reverse;
    padding: 0;
    padding-top: ${Padding.SIZE_10};
    min-height: 140px;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: ${Subtitle.SIZE_4};
  span {
    font-weight: bold;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: ${TextBody.SIZE_4};
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 808px;
  flex-direction: row;
  padding: 101px 0 50px 0;

  @media (max-width: ${Breakpoints.tablet}) {
    height: 708px;
    padding: 0;
  }
`;

export const Divisor = styled.div`
  width: 1px;
  height: 383px;
  border: solid 1px #979797;

  @media (max-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;
