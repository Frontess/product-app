import React from "react";
import Head from "next/head"; // Подключение Head из Next.js
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/global.css"; // Импорт глобальных стилей

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <Provider store={store}>
      <>
        <Head>
          <link rel="icon" href="/product-app/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    </Provider>
  );
};

export default MyApp;
