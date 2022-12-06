import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Exploring the World 🧙‍♂️</title>
        <link rel="shortcut icon" href="/public/img/logo.png" />
        <link rel="apple-touch-icon" href="/public/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Wonderful historical places that I hope to visit one day in this big world. 🌎"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
