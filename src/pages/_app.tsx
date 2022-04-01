import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/GlobalStyle'
import { StudentsContextProvider } from '../contexts/StudentsContext'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StudentsContextProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </StudentsContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
