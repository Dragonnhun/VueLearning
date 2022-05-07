import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/adminlte/adminlte.min.css';
import '../styles/fontawesome-free/css/all.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
