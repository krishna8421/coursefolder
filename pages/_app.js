import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Coursefolder | Home</title>
          <meta name="description" content="Get Free Courses" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
