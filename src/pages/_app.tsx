import App, { AppProps, AppContext  } from 'next/app';
import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from 'styles/theme';
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import { GlobalStyles } from 'styles/global-style';
import { appWithTranslation } from 'shared/utils/internationalization';

type AppComponent = FC<AppProps> & { getInitialProps: (appContext: AppContext) => Promise<any> };

const MyApp: AppComponent = ({ Component, pageProps }) => {
  useEffect(() => {
    history.scrollRestoration = 'manual';
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
