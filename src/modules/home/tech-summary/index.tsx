import React, { FC } from 'react';
import { TechContainer, StackTitleLight, StackTitleBold, StackContainer } from './styles';
import * as tranlations from './Translations/en.json';
import GenericDivider from 'shared/components/GenericDivider';
import { STACK_IMAGES, Images } from 'shared/constants/assets';
import { useTheme } from 'styled-components';

type TechSummaryProps = {};

const TechSummary: FC<TechSummaryProps> = () => {
  const theme = useTheme();

  return (
    <TechContainer>
      <StackTitleLight>
        {tranlations['home.techstack.title']}
        <StackTitleBold> {tranlations['home.techstack.title.upper']}</StackTitleBold>
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
