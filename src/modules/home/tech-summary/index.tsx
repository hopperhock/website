import React, { FC } from 'react';
import { TechContainer, StackTitleLight, StackTitleBold, StackContainer } from './index.styles';
import * as tranlations from './Translations/en.json';
import { DARK_THEME } from './../../../styles/theme/index';
import GenericDivider from 'shared/components/GenericDivider';
import { STACK_IMAGES, Images } from 'shared/constants/assets';

type TechSummaryProps = {};

const TechSummary: FC<TechSummaryProps> = () => {
  return (
    <TechContainer>
      <StackTitleLight>
        {tranlations['home.techstack.title']}
        <StackTitleBold> {tranlations['home.techstack.title.upper']}</StackTitleBold>
      </StackTitleLight>
      <GenericDivider color={DARK_THEME.SECONDARY_COLOR_LIGHT_3} />
      <StackContainer>
        {STACK_IMAGES.map((image, index) => {
          return <img key={index} src={`${Images.STACK_IMAGES_BASE_URL}${image}`} />;
        })}
      </StackContainer>
    </TechContainer>
  );
};

export default TechSummary;
