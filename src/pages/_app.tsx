import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
