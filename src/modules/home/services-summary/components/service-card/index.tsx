import React, { FC, useCallback } from 'react';
import { ServiceTitle, ServicesDivider, ButtonContainer, Containers, CardDescriptioner } from './styles';
import * as translations from './Translations/en.json';
import Card from 'shared/components/Card';
import Router from 'next/router';
import { BlueGrey, Globals } from 'styles/utilities/colors';
import Button from 'shared/components/Button';
import { THEME } from 'styles/theme/index';
import { TextBody } from '../../../../../styles/utilities/font-sizes';

type ServiceCardProps = {
  serviceTitle: string;
  description: string;
  image: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ serviceTitle, description, image }) => {
  const redirectToContactUs = useCallback(() => Router.push(`/about-us`), []);

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
            redirectAction={redirectToContactUs}
            width="40%"
            fontSize={TextBody.SIZE_4}
          >
            {translations['home.services.button.title']}
          </Button>
          <Button
            color={THEME.TERTIARY_COLOR_LIGHT_5}
            textColor={THEME.WHITE}
            isOutline
            redirectAction={redirectToContactUs}
            width="40%"
            fontSize={TextBody.SIZE_4}
          >
            {translations['home.services.button.title2']}
          </Button>
        </ButtonContainer>
      </Card>
    </Containers>
  );
};

export default ServiceCard;
