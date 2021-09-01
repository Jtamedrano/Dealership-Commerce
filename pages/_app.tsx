import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
