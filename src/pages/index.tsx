import { SFC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  background-color: ${(props) => props.theme.SECONDARY_COLOR_1};
  height: 100%;
  padding: 0 0.5rem;
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

const Home: SFC = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title>Hello World</Title>
        Read{' '}
        <Link href="/about-us">
          <a>this page!</a>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
