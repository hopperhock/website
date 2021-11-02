import React, { FC } from 'react';
import { ServiceTitle, ServicesDivider, ButtonContainer, Containers, CardDescriptioner } from './styles';
import Card from 'shared/components/Card';
import { BlueGrey, Globals } from 'styles/utilities/colors';
import Button from 'shared/components/Button';
import { THEME } from 'styles/theme/index';
import { TextBody } from 'styles/utilities/font-sizes';
import { useTranslation } from 'shared/utils/internationalization';

type ServiceCardProps = {
  serviceTitle: string;
  description: string;
  image: string;
};

const BUTTON_WIDTH = '40%';
const SERVICES_ROUTE = 'services';
const CONTACT_ROUTE = 'contact-us';

const ServiceCard: FC<ServiceCardProps> = ({ serviceTitle, description, image }) => {
  const { t } = useTranslation('home');

  return (
    <Containers>
      <Card image={image}>
        <ServiceTitle>{serviceTitle}</ServiceTitle>
        <ServicesDivider />
        <CardDescriptioner>{description}</CardDescriptioner>
        <ButtonContainer>
          <Button
            color={BlueGrey.DARK_1}
            textColor={Globals.WHITE}
            redirectAction={SERVICES_ROUTE}
            width={BUTTON_WIDTH}
            fontSize={TextBody.SIZE_4}
          >
            {t('services.button.services')}
          </Button>
          <Button
            color={THEME.TERTIARY_COLOR_LIGHT_5}
            textColor={THEME.WHITE}
            isOutline
            redirectAction={CONTACT_ROUTE}
            width={BUTTON_WIDTH}
            fontSize={TextBody.SIZE_4}
          >
            {t('services.button.contact')}
          </Button>
        </ButtonContainer>
      </Card>
    </Containers>
  );
};

export default ServiceCard;
