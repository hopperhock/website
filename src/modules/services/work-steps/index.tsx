import React, { FC } from 'react';
import { Container, HeaderTitle, WorkStepsContainer } from './styles';
import { WORK_PROCESS_STEPS_EN, WORK_PROCESS_STEPS_ES, Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

let imagesLogos = true ? WORK_PROCESS_STEPS_EN : WORK_PROCESS_STEPS_ES; // TO DO Get language

const WorkSteps: FC = () => {
  const { t } = useTranslation('services');
  let imagesLogos = true ? WORK_PROCESS_STEPS_EN : WORK_PROCESS_STEPS_ES; // TO DO validation according with internationalization - true is temporal
  return (
    <Container>
      <HeaderTitle> {t('how-we-work.title')}</HeaderTitle>
      <WorkStepsContainer>
        {imagesLogos.map((image, index) => {
          return <img key={index} src={`${Images.WORK_STEPS_BASE_URL}${image}`} />;
        })}
      </WorkStepsContainer>
    </Container>
  );
};

export default WorkSteps;
