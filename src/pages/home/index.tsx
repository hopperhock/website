import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import HomeIntroduction from 'modules/home/introduction';
import ServicesSummary from 'modules/home/services-summary';
import ParallaxBanner from 'shared/components/Parallax-Banner';
import Nearshore from 'modules/home/nearshore';
import { Images } from 'shared/constants/assets';
import TechSummary from 'modules/home/tech-summary';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>HopperHock - Improve, Grown & Innovate</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Container>
        <HomeIntroduction />
        <ServicesSummary />
        <Nearshore />
        <ParallaxBanner
          bannerContainer={Images.PARALLAX_BANNER_CONTAINER}
          bannerImage={Images.PARALLAX_BANNER_BACKGROUND}
        />
        <TechSummary></TechSummary>
      </Container>
    </>
  );
};

export default Home;
