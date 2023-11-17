import StoreContextProvider from "@/context/store_context";
import { store } from "@/store/redux_toolkit";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-400 w-screen h-screen pt-10">
      <StoreContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />{" "}
        </Provider>
      </StoreContextProvider>
    </div>
  );
}
