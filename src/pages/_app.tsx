import { AppProps } from 'next/app';
import { SFC } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from 'shared/components/Navbar';
import { DARK_THEME } from 'styles/theme';

const MyApp: SFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
