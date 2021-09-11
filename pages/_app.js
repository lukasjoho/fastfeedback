import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';
import customTheme from '../styles/theme';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 350px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
