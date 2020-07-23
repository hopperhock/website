import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import HomeIntroduction from 'modules/home/introduction';
import ParallaxBanner from 'shared/components/ParallaxBanner';
import { Images } from 'shared/constants/assets';

const Container = styled.div`
  height: 200vh;
  display: flex;
`;

const Home: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ParallaxBanner
          bannerContainer={Images.PARALLAX_BANNER_CONTAINER}
          bannerImage={Images.PARALLAX_BANNER_BACKGROUND}
        />
        <HomeIntroduction />
      </Container>
    </div>
  );
};

export default Home;
