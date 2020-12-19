import React, { FC } from 'react';
import Button from '../Button/index';
import { Globals, BlueGrey } from 'styles/utilities/colors';
import {
  ParallaxBannerImage,
  ParallaxContainer,
  ParallaxTextDisplayer,
  ParallaxBoldTextDisplayer,
  Container
} from './styles';
import { useTranslation } from 'shared/utils/internationalization';

type IParallaxBannerProps = {
  bannerImage: string;
  bannerContainer: string;
};

const BUTTON_WIDTH = '30%';

const ParallaxBanner: FC<IParallaxBannerProps> = ({ bannerImage, bannerContainer }) => {
  const { t } = useTranslation('home');

  return (
    <Container>
      <ParallaxBannerImage bannerImageSource={bannerImage}>
        <ParallaxContainer bannerContainerSource={bannerContainer}>
          <ParallaxTextDisplayer>
            {t('banner.label.title')}
            <br></br>
            {t('banner.label.description')}
            <ParallaxBoldTextDisplayer>{t('banner.bold')}</ParallaxBoldTextDisplayer>
          </ParallaxTextDisplayer>
          <Button color={BlueGrey.DARK_1} textColor={Globals.WHITE} redirectAction="contact-us" width={BUTTON_WIDTH}>
            {t('banner.button')}
          </Button>
        </ParallaxContainer>
      </ParallaxBannerImage>
    </Container>
  );
};

export default ParallaxBanner;
