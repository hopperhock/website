import React, { FC } from 'react';
import { Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

import {
  Container,
  BrandImage,
  BrandContainer,
  SchedulleCallContainer,
  LeftLabel,
  ButtonContainer,
  ButtonText,
  ContactInformationContainer,
  ContactText,
} from './styles';

const LeftContainer: FC = () => {
  const { t } = useTranslation('footer');

  return (
    <Container>
      <BrandContainer>
        <BrandImage src={Images.BRAND_WHITE} />
      </BrandContainer>
      <SchedulleCallContainer>
        <LeftLabel>{t('left.wantTalkAbout')}</LeftLabel>
        <ButtonContainer>
          <ButtonText>{t('left.scheduleCall')}</ButtonText>
        </ButtonContainer>
      </SchedulleCallContainer>
      <ContactInformationContainer>
        <ContactText>
          <span>{t("left.address.label")}</span>{t("left.address.value")}
        </ContactText>
        <ContactText>
          <span>{t("left.phone.label")}</span> 83253452
        </ContactText>
        <ContactText>
          <span>{t("left.email.label")}</span> <a href="mailto:sales@hopperhock.com">sales@hopperhock.com</a>
        </ContactText>
      </ContactInformationContainer>
    </Container>
  );
};

export default LeftContainer;
