import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/adminlte/adminlte.min.css';
import '../styles/fontawesome-free/css/all.min.css';
import Layout from "../components/layouts/layout";
import {Fragment} from "react";

export default function MyApp({ Component, pageProps, ...appProps  }: AppProps) {

    const isLayoutNeeded = [`/`].includes(appProps.router.pathname);
    const LayoutComponent = isLayoutNeeded ? Layout : Fragment;

  return (
    <Provider store={store}>
        <LayoutComponent>
            <Component {...pageProps} />
        </LayoutComponent>
    </Provider>
  )
}
