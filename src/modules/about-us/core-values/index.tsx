import React, { FC } from 'react';
import { useTranslation } from 'shared/utils/internationalization';
import CoreValueItem from './core-value-item';

import { Container, Column, ColumnsContainer, Header } from './styles';

const CoreValues: FC = () => {
  const { t } = useTranslation('about-us');

  return (
    <Container>
      <Header>
        <span>{t('core-values.title.0')}</span> {t('core-values.title.1')}
        <br />
        {t('core-values.title.2')}
      </Header>
      <ColumnsContainer>
        <Column>
          <CoreValueItem title={t('core-values.values.0.title')} content={t('core-values.values.0.content')} />
          <CoreValueItem title={t('core-values.values.1.title')} content={t('core-values.values.1.content')} />
          <CoreValueItem title={t('core-values.values.2.title')} content={t('core-values.values.2.content')} />
        </Column>
        <Column>
          <CoreValueItem title={t('core-values.values.3.title')} content={t('core-values.values.3.content')} />
          <CoreValueItem title={t('core-values.values.4.title')} content={t('core-values.values.4.content')} />
          <CoreValueItem title={t('core-values.values.5.title')} content={t('core-values.values.5.content')} />
        </Column>
      </ColumnsContainer>
    </Container>
  );
};

export default CoreValues;
