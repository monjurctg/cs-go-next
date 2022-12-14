import Head from "next/head";

import "../styles/globals.scss";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>CS Go</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lexend:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
