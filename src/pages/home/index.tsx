import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import HomeIntroduction from 'modules/home/introduction';
import ParallaxBanner from 'shared/components/ParallaxBanner';
import { Images } from 'shared/constants/assets';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
`;

const Home: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HomeIntroduction />
        <ParallaxBanner
          bannerContainer={Images.PARALLAX_BANNER_CONTAINER}
          bannerImage={Images.PARALLAX_BANNER_BACKGROUND}
        />
      </Container>
    </div>
  );
};

export default Home;
