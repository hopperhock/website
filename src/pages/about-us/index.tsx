import { NextPage } from 'next';
import styled from 'styled-components';
import { CarouselProvider } from 'pure-react-carousel';
import AboutUsIntroduction from 'modules/about-us/introduction';
import Founders from 'modules/about-us/founders';
import CoreValues from 'modules/about-us/core-values';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const AboutUs: NextPage = () => {
  const CarouselContainer = styled(CarouselProvider)``;
  return (
    <Container>
      <AboutUsIntroduction />
      <CarouselContainer
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        interval={10000}
        isPlaying={true}
        infinite={true}
      >
        <Founders />
        <CoreValues />
      </CarouselContainer>
    </Container>
  );
};

AboutUs.getInitialProps = () => ({
  namespacesRequired: ['common', 'about-us'],
});

export default AboutUs;
