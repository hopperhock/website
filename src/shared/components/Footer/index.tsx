import { Container, Content, CopyrightContainer, Divisor, ImagesContainer, SocialContainer } from './styles';
import { Images, SOCIAL_IMAGES } from 'shared/constants/assets';
import React, { FC } from 'react';

import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { useTranslation } from 'shared/utils/internationalization';

const Footer: FC = () => {
  const today = new Date();
  const { t } = useTranslation('common');

  return (
    <Container footerImageSource={Images.FOOTER_BACKGROUND}>
      <Content>
        <LeftContainer />
        <Divisor />
        <RightContainer />
      </Content>
      <SocialContainer socialImageSource={Images.FOOTER_SOCIAL_BACKGROUND}>
        <CopyrightContainer>
          © {today.getFullYear()}
          <span>&nbsp; HopperHock &nbsp;</span>
          {t('footer.copyright')}
        </CopyrightContainer>
        <ImagesContainer>
          {SOCIAL_IMAGES.map((image, index) => {
            return <img key={index} src={`${Images.SOCIAL_IMAGES_BASE_URL}${image}`} />;
          })}
        </ImagesContainer>
      </SocialContainer>
    </Container>
  );
};

export default Footer;
