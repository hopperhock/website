import { NextPage } from 'next';
import AboutUsIntroduction from 'modules/about-us/introduction';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutUs: NextPage = () => {
  return (
    <Container>
      <AboutUsIntroduction />
    </Container>
  );
};

AboutUs.getInitialProps = () => ({
  namespacesRequired: ['common', 'about-us'],
});


export default AboutUs;
