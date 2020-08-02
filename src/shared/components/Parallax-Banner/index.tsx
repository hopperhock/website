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
  const redirectToContactUs = useCallback(() => Router.push(`/about-us`), []);

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
          <Button color={BlueGrey.DARK_1} textColor={Globals.WHITE} redirectAction={redirectToContactUs} width="30%">
            {translations['home.banner.button.label']}
          </Button>
        </ParallaxContainer>
      </ParallaxBannerImage>
    </Container>
  );
};

export default ParallaxBanner;
