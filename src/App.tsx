import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import "./styles/global.css";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <main className="container">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
};

export default App;
