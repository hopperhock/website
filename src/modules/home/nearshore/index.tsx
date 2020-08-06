import React from 'react';
import Container, { NearshoreHeading, LineSeparator, NearshoreBenefits, Benefit } from './styles';
import { Images } from 'shared/constants/assets';
import * as translations from './Translations/en.json';

const Nearshore = () => {
  return (
    <Container>
      <NearshoreHeading>
        <span>{translations['home.nearshore.highlighted-title']}</span> {translations['home.nearshore.title']}
      </NearshoreHeading>
      <LineSeparator />
      <NearshoreBenefits>
        <Benefit>
          <img src={Images.NS_TRIPS} />
          <span>{translations['home.nearshore.ns-trips']}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_COST} />
          <span>{translations['home.nearshore.ns-cost']}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_QUALITY} />
          <span>{translations['home.nearshore.ns-quality']}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_CULTURE} />
          <span>{translations['home.nearshore.ns-culture']}</span>
        </Benefit>
        <Benefit>
          <img src={Images.NS_TIME} />
          <span>{translations['home.nearshore.ns-time']}</span>
        </Benefit>
      </NearshoreBenefits>
    </Container>
  );
};

export default Nearshore;
