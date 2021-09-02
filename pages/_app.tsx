import type { AppProps } from "next/app";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

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
