import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { createClient, Provider } from "urql";
import { ReduxProvider } from "../store";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/index.scss";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Provider value={client}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ReduxProvider>
  );
}
export default MyApp;
