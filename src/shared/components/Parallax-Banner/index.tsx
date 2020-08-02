import React, { FC, useCallback } from 'react';
import Router from 'next/router';
import Button from '../Button/index';
import { Globals, BlueGrey } from 'styles/utilities/colors';
import {
  ParallaxBannerImage,
  ParallaxContainer,
  ParallaxTextDisplayer,
  ParallaxBoldTextDisplayer,
  Container
} from './styles';
import * as translations from './Translations/en.json';

type IParallaxBannerProps = {
  bannerImage: string;
  bannerContainer: string;
};

const ParallaxBanner: FC<IParallaxBannerProps> = ({ bannerImage, bannerContainer }) => {
  const BUTTON_WIDTH = '30%';
  return (
    <Container>
      <ParallaxBannerImage bannerImageSource={bannerImage}>
        <ParallaxContainer bannerContainerSource={bannerContainer}>
          <ParallaxTextDisplayer>
            {translations['home.banner.label.title']}
            <br></br>
            {translations['home.banner.label.description']}
            <ParallaxBoldTextDisplayer>{translations['home.banner.bold.label']}</ParallaxBoldTextDisplayer>
          </ParallaxTextDisplayer>
          <Button color={BlueGrey.DARK_1} textColor={Globals.WHITE} redirectAction="about-us" width={BUTTON_WIDTH}>
            {translations['home.banner.button.label']}
          </Button>
        </ParallaxContainer>
      </ParallaxBannerImage>
    </Container>
  );
};

export default ParallaxBanner;
