import React, { FC, useContext, useEffect, useState } from 'react';
import { CarouselContext } from 'pure-react-carousel';
import { Images } from 'shared/constants/assets';
import { Router, useTranslation } from 'shared/utils/internationalization';
import FOUNDERS from './data/founders';
import Container, {
  ActionButton,
  Description,
  DescriptionHeading,
  Founder,
  FounderDescription,
  FounderIcon,
  FounderInformation,
  FounderList,
  FoundersContainer,
} from './styles';

const Founders: FC = () => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
  const { t } = useTranslation('about-us');
  const founderIcon = Images.FOUNDER_ICON;
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);
  return (
    <Container>
      <FoundersContainer>
        {Array.from(FOUNDERS.keys()).map((f, i) => (
          <Founder key={f} index={i} photo={FOUNDERS.get(f)!}>
            <FounderInformation>
              <h2>{t('founders.left-title')}</h2>
              <h3>{t(`founders.${f}.name`)}</h3>
              <h5>{t(`founders.${f}.position`)}</h5>
            </FounderInformation>
          </Founder>
        ))}
      </FoundersContainer>
      <Description>
        <DescriptionHeading>
          {t('founders.right-title.0')} <br /> <span>{t('founders.right-title.1')}</span>
        </DescriptionHeading>
        <FounderList>
          {Array.from(FOUNDERS.keys()).map((f, i) => (
            <FounderIcon
              key={f}
              slide={i}
              active={(currentSlide === i).toString()}
              photo={founderIcon}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </FounderList>
        <FounderDescription>{t(`founders.${Array.from(FOUNDERS.keys())[currentSlide]}.description`)}</FounderDescription>
        <ActionButton onClick={() => Router.push('/contact-us')}>Book a Call</ActionButton>
      </Description>
    </Container>
  );
};

export default Founders;
