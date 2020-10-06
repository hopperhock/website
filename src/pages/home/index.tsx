import { NextPage } from 'next';
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

const Home: NextPage = () => {
  return (
    <>
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

Home.getInitialProps = () => ({
  namespacesRequired: ['common', 'home'],
});

export default Home;
