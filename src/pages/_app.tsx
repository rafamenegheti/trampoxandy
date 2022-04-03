import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
