import React from 'react';
import Container, { NearshoreHeading, LineSeparator, NearshoreBenefits, Benefit } from './styles';
import { NSTrips } from 'styles/illustrations/NSTrips';
import { NSCost } from 'styles/illustrations/NSCost';
import { NSQuality } from 'styles/illustrations/NSQuality';
import { NSCulture } from 'styles/illustrations/NSCulture';
import { NSTime } from 'styles/illustrations/NSTime';

const Nearshore = () => {
  return (
    <Container>
      <NearshoreHeading>
        <span>WE GUARANTEE</span> The best Nearshore <br /> Experience in Costa Rica
      </NearshoreHeading>
      <LineSeparator />
      <NearshoreBenefits>
        <Benefit>
          <NSTrips />
          <span>
            No more <br /> long trips
          </span>
        </Benefit>
        <Benefit>
          <NSCost />
          <span>Lower Cost</span>
        </Benefit>
        <Benefit>
          <NSQuality />
          <span>
            Quality <br /> performers
          </span>
        </Benefit>
        <Benefit>
          <NSCulture />
          <span>
            Great <br /> Culture
          </span>
        </Benefit>
        <Benefit>
          <NSTime />
          <span>Time zone</span>
        </Benefit>
      </NearshoreBenefits>
    </Container>
  );
};

export default Nearshore;
