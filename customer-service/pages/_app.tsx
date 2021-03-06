import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import "../styles/bootstrap-custom.scss";

import { Provider } from "react-redux"; // react 앱에 redux store를 제공해줌
import { store } from "../provider"; // redux store

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
