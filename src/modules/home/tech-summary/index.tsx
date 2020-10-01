import React, { FC } from 'react';
import { TechContainer, StackTitleLight, StackTitleBold, StackContainer } from './styles';
import * as tranlations from './Translations/en.json';
import GenericDivider from 'shared/components/GenericDivider';
import { STACK_IMAGES, Images } from 'shared/constants/assets';
import { useTheme } from 'styled-components';
import { useTranslation } from 'shared/utils/internationalization';

type TechSummaryProps = {};

const TechSummary: FC<TechSummaryProps> = () => {
  const theme = useTheme();
  const { t } = useTranslation('home');

  return (
    <TechContainer>
      <StackTitleLight>
        {t('techstack.title')}
        <StackTitleBold> {t('techstack.upper')}</StackTitleBold>
      </StackTitleLight>
      <GenericDivider color={theme.SECONDARY_COLOR_LIGHT_3} />
      <StackContainer>
        {STACK_IMAGES.map((image, index) => {
          return <img key={index} src={`${Images.STACK_IMAGES_BASE_URL}${image}`} />;
        })}
      </StackContainer>
    </TechContainer>
  );
};

export default TechSummary;
