import styled, { css } from 'styled-components';
import { Margin } from 'styles/utilities/gutters';
import { Title } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';

const baseParallaxBannerStyles = css`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
`;

const baseParallaxTextDisplayer = css`
  color: ${({ theme }) => theme.WHITE};
  display: inline;
  font-size: ${Title.SIZE_1};
  text-align: center;
  margin: ${Margin.SIZE_0};
  width: 65%;
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: ${Title.SIZE_4};
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  scroll-snap-align: start;
`;

export const ParallaxBannerImage = styled.div<{ bannerImageSource: string }>`
${baseParallaxBannerStyles}
  background-attachment: fixed;
  background-image: url(${({ bannerImageSource }) => bannerImageSource});
  height: 655px;
  margin-left: auto;
  margin-right: auto;
}
`;

export const ParallaxContainer = styled.div<{ bannerContainerSource: string }>`
${baseParallaxBannerStyles}
  background-image: url(${({ bannerContainerSource }) => bannerContainerSource});
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const ParallaxTextDisplayer = styled.span`
  ${baseParallaxTextDisplayer}
  font-family: "Roboto Light Italic", helvetica;
`;

export const ParallaxBoldTextDisplayer = styled.span`
  ${baseParallaxTextDisplayer}
  font-family: 'Roboto Bold Italic', helvetica;
`;
