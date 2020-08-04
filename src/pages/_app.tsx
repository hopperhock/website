import { AppProps } from 'next/app';
import { SFC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from 'styles/theme';
import Header from 'shared/components/Header';
import { GlobalStyles } from 'styles/global-style';

const MyApp: SFC<AppProps> = ({ Component, pageProps }) => {
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

export default MyApp;
