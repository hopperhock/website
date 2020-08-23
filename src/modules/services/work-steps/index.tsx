import React, { FC } from 'react';
import { Container, HeaderTitle, WorkStepsContainer } from './styles';
import * as translations from './Translations/en.json';
import { WORK_PROCESS_STEPS, Images } from 'shared/constants/assets';

const WorkSteps: FC = () => {
  return (
    <Container>
      <HeaderTitle> {translations['services.how-we-work.title']}</HeaderTitle>
      <WorkStepsContainer>
        {WORK_PROCESS_STEPS.map((image, index) => {
          return <img key={index} src={`${Images.WORK_STEPS_BASE_URL}${image}`} />;
        })}
      </WorkStepsContainer>
    </Container>
  );
};

export default WorkSteps;
