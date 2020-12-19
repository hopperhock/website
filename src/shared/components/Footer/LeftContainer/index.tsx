import React, { FC } from 'react';
import { Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

import {
  Container,
  BrandImage,
  BrandContainer,
  SchedulleCallContainer,
  LeftLabel,
  ButtonText,
  ContactInformationContainer,
  ContactText,
} from './styles';

const LeftContainer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <BrandContainer>
        <BrandImage src={Images.BRAND_WHITE} />
      </BrandContainer>
      <SchedulleCallContainer>
        <LeftLabel>{t('footer.left.wantTalkAbout')}</LeftLabel>
        <ButtonText href="/contact-us">
          {t('footer.left.scheduleCall')}
        </ButtonText>
      </SchedulleCallContainer>
      <ContactInformationContainer>
        <ContactText>
          <span>{t("footer.left.address.label")}</span>{t("footer.left.address.value")}
        </ContactText>
        <ContactText>
          <span>{t("footer.left.phone.label")}</span> 83253452
        </ContactText>
        <ContactText>
          <span>{t("footer.left.email.label")}</span> <a href="mailto:sales@hopperhock.com">sales@hopperhock.com</a>
        </ContactText>
      </ContactInformationContainer>
    </Container>
  );
};

export default LeftContainer;
