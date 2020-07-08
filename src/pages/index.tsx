import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  background-image: url('https://images2.alphacoders.com/106/1063352.jpg');
  background-repeat: no-repeat;
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
  color: teal;
`;

const Home: FC = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Link href="/about-us">
          <a>this page!</a>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
