import React, { FC } from 'react';
import Container, {
  MainBackground,
  StaffAugmentation,
  LineSeparator,
  ServicesDescriptionBackgroundMobile,
  ServicesExplanation,
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
      <ServicesExplanation>
        <h2>
          {t('custom-product.title.0')} <span>{t('custom-product.title.1')}</span>
        </h2>
        <LineSeparator />
        <p>
        {t('custom-product.content')}
        </p>
      </ServicesExplanation>
    </Container>
  );
};

export default ServicesDescription;
