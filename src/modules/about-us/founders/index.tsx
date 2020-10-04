import React, { FC, useContext, useEffect, useState } from 'react';
import { CarouselContext } from 'pure-react-carousel';
import { Images } from 'shared/constants/assets';
import { Router } from 'shared/utils/internationalization';
import founders from './data/founders';
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
        {founders.map((f, i) => (
          <Founder key={i} index={i} photo={f.photo}>
            <FounderInformation>
              <h2>MEET OUR TEAM</h2>
              <h3>{f.name}</h3>
              <h5>{f.position}</h5>
            </FounderInformation>
          </Founder>
        ))}
      </FoundersContainer>
      <Description>
        <DescriptionHeading>
          MEET <br /> <span>The Founders.</span>
        </DescriptionHeading>
        <FounderList>
          {founders.map((_, i) => (
            <FounderIcon
              key={i}
              slide={i}
              active={(currentSlide === i).toString()}
              photo={founderIcon}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </FounderList>
        <FounderDescription>{founders[currentSlide].description}</FounderDescription>
        <ActionButton onClick={() => Router.push('/contact-us')}>Book a Call</ActionButton>
      </Description>
    </Container>
  );
};

export default Founders;
