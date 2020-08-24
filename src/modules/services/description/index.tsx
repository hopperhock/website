import React, { FC } from 'react';
import Container, {
  MainBackground,
  StaffAugmentation,
  LineSeparator,
  ServicesDescriptionBackgroundMobile
} from './styles';
import { Images } from 'shared/constants/assets';

const ServicesDescription: FC = () => {
  return (
    <Container>
      <MainBackground />
      <ServicesDescriptionBackgroundMobile src={Images.SERVICES_DESCRIPTION_MOBILE} alt="Services Background" />
      <StaffAugmentation>
        Technical <br /> Staff <span>Augmentation</span>
        <LineSeparator />
        <p>
          HopperHock cares about the standard, great practices and excellent technical skills. We guarantee a great
          place that really contributes to your team and your business.
        </p>
      </StaffAugmentation>
    </Container>
  );
};

export default ServicesDescription;
