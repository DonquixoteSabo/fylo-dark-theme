import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
   font-size: 14px;
   background: hsl(218, 28%, 13%);
   font-family: 'Open Sans', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    neutral: 'hsl(0, 0%, 100%)',
    cadetBlue: '#62E0D9',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
