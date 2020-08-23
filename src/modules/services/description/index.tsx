import React from 'react';
import Container, {
  ServicesDescriptionBackground,
  StaffAugmentation,
  LineSeparator,
  ServicesDescriptionBackgroundMobile
} from './styles';
import { Images } from 'shared/constants/assets';
import { Breakpoints } from 'styles/utilities/breakpoints';

function ServicesDescription() {
  return (
    <Container>
      <ServicesDescriptionBackground src={Images.SERVICES_DESCRIPTION} alt="Services Background" />
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
}

export default ServicesDescription;
