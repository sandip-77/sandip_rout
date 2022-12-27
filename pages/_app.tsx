import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>
        <title>Sandip Rout</title>
        <meta
          name="description"
          content="This is the personal portfolio website of sandip rout."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center mt-6 px-6">
        Thank you for visiting my profile. Its now under progress and will
        update shortly.
      </div>{" "}
    </>
  );
}
export default MyApp;
