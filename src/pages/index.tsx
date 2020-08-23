import { useEffect } from 'react';
import Router from 'next/router';

const redirectTo = '/home';

const RootPage = () => {
  useEffect(() => {
    Router.push(redirectTo);
  });
  return null;
};

export default RootPage;
