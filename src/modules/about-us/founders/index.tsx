import React, { FC, useContext, useEffect, useState } from 'react';
import { CarouselContext } from 'pure-react-carousel';
import { Images } from 'shared/constants/assets';
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
  const founders = [
    {
      name: 'Andrés Matta',
      photo: Images.FOUNDER_1,
      position: 'Co-Founder',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      name: 'Dalmiro Huete',
      photo: Images.FOUNDER_2,
      position: 'Co-Founder',
      description:
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    },
    {
      name: 'Hersey Aguilar',
      photo: Images.FOUNDER_3,
      position: 'Co-Founder',
      description:
        'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
    },
  ];
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
        <ActionButton onClick={() => console.log('Foo')}>Book a Call</ActionButton>
      </Description>
    </Container>
  );
};

export default Founders;
