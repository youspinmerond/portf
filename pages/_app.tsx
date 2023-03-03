import Layout from "@/module/Layout/Layout";
import "styles/globals.sass";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import store from "../store/page";
import { Provider } from "react-redux";

const roboto = Roboto({weight:["400", "700"],subsets:["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout className={roboto.className}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
