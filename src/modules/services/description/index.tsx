import React, { FC } from 'react';
import Container, {
  MainBackground,
  StaffAugmentation,
  LineSeparator,
  ServicesDescriptionBackgroundMobile,
} from './styles';
import { Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

const ServicesDescription: FC = () => {
  const { t } = useTranslation('services');

  return (
    <Container>
      <MainBackground />
      <ServicesDescriptionBackgroundMobile src={Images.SERVICES_DESCRIPTION_MOBILE} alt="Services Background" />
      <StaffAugmentation>
        {t('description.tech')} <br /> {t('description.staff')} <span>{t('description.augmentation')}</span>
        <LineSeparator />
        <p>{t('description.content')}</p>
      </StaffAugmentation>
    </Container>
  );
};

export default ServicesDescription;
