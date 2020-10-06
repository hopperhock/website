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
          Custom Product & Software <span>Development ?</span>
        </h2>
        <LineSeparator />
        <p>
          In all our services, we ensure the final product fulfills your expectation. This is because since day one we
          provide you an accompanying through every phase of development: Clear estimations, Demo sessions, Mocks,
          flexible methodologies, and more.
        </p>
      </ServicesExplanation>
    </Container>
  );
};

export default ServicesDescription;
