import App from 'next/app';
import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from 'styles/theme';
import Header from 'shared/components/Header';
import { GlobalStyles } from 'styles/global-style';
import { appWithTranslation } from 'shared/utils/internationalization';

type AppComponent = FC<AppProps> & { getInitialProps: (appContext: any) => Promise<any> };

const MyApp: AppComponent = ({ Component, pageProps }) => {
  useEffect(() => {
    history.scrollRestoration = 'manual';
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
