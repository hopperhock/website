import { useEffect } from 'react';
import { NextPageContext } from 'next';
import Router from 'next/router';

const redirectTo = '/home';

const RootPage = () => {
  useEffect(() => {
    Router.push(redirectTo);
  });
  return null;
};

RootPage.getInitialProps = (ctx: NextPageContext) => {
  if (ctx.req && ctx.res) {
    ctx.res.writeHead(302, { Location: redirectTo });
    ctx.res.end();
  }
};

export default RootPage;
