import React from 'react';
import Container, { NearshoreHeading, LineSeparator, NearshoreBenefits, Benefit } from './styles';
import { Images } from 'shared/constants/assets';
import { useTranslation } from 'shared/utils/internationalization';

const Nearshore = () => {
  const { t } = useTranslation('home');

  return (
    <Container>
      <NearshoreHeading>
        <span>{t('nearshore.highlighted-title')}</span> {t('nearshore.title')}
      </NearshoreHeading>
      <LineSeparator />
      <NearshoreBenefits>
        <Benefit>
          <img src={Images.NS_TRIPS} />
          <span>{t('nearshore.ns-trips')}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_COST} />
          <span>{t('nearshore.ns-cost')}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_QUALITY} />
          <span>{t('nearshore.ns-quality')}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_CULTURE} />
          <span>{t('nearshore.ns-culture')}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_TIME} />
          <span>{t('nearshore.ns-time')}</span>
        </Benefit>
      </NearshoreBenefits>
    </Container>
  );
};

export default Nearshore;
