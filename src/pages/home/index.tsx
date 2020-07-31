import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import HomeIntroduction from 'modules/home/introduction';
import ServicesSummary from 'modules/home/services-summary';
import ParallaxBanner from 'shared/components/Parallax-Banner';
import { Images } from 'shared/constants/assets';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HomeIntroduction />
        <ServicesSummary />
        <ParallaxBanner
          bannerContainer={Images.PARALLAX_BANNER_CONTAINER}
          bannerImage={Images.PARALLAX_BANNER_BACKGROUND}
        />
      </Container>
    </>
  );
};

export default Home;
