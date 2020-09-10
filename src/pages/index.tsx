import { useEffect } from 'react';
import { Router } from 'shared/utils/internationalization';

const redirectTo = '/home';

const RootPage = () => {
  useEffect(() => {
    Router.push(redirectTo);
  });
  return null;
};

export default RootPage;
