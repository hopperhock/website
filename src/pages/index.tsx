import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ParallaxBanner from '../shared/components/ParallaxBanner';
import { Images } from '../shared/constants/assetsConstants';

const Container = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const Home: FC = (props) => {
  return (
    <div className="container">
      <Head>
        <title>HopperHock - We guarantee Software Quality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ParallaxBanner
          bannerContainer={Images.PARALLAX_BANNER_CONTAINER}
          bannerImage={Images.PARALLAX_BANNER_BACKGROUND}
        />
      </Container>
    </div>
  );
};

export default Home;
