import { ChakraProvider } from '@chakra-ui/react';
import  theme  from '../theme/theme';
import '@fontsource/inter';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    )
  );
}

export default MyApp;
