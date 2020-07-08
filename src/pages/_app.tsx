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
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default MyApp;
