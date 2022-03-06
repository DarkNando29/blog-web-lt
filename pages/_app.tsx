import React, {useState, useEffect, ReactNode} from 'react';
import { Layout } from '../components'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {... pageProps}/>
    </Layout>
  ) 
}
