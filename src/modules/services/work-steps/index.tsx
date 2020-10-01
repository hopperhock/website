import React, { FC } from 'react';
import { Container, HeaderTitle, WorkStepsContainer } from './styles';
import { WORK_PROCESS_STEPS, Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

const WorkSteps: FC = () => {
  const { t } = useTranslation('services');

  return (
    <Container>
      <HeaderTitle> {t('how-we-work.title')}</HeaderTitle>
      <WorkStepsContainer>
        {WORK_PROCESS_STEPS.map((image, index) => {
          return <img key={index} src={`${Images.WORK_STEPS_BASE_URL}${image}`} />;
        })}
      </WorkStepsContainer>
    </Container>
  );
};

export default WorkSteps;
