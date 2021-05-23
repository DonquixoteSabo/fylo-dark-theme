import Head from 'next/head';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Carts from '../components/Carts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo dark theme landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Header />
      <Carts />
    </>
  );
}
