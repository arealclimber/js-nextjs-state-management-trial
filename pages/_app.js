import StoreContextProvider from "@/context/store_context";
import { GlobalContext } from "@/context/zustand_context";
import { createGlobalStore } from "@/stores/zustand_create_store";
import "@/styles/globals.css";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "@/stores/redux_toolkit";

export default function App({ Component, pageProps }) {
  const zustandStore = useRef(createGlobalStore).current;
  return (
    <div className="bg-gray-400 w-screen h-screen pt-10">
      {" "}
      <GlobalContext.Provider value={zustandStore}>
        <StoreContextProvider>
          <Provider store={store}>
            <Component {...pageProps} />{" "}
          </Provider>
        </StoreContextProvider>{" "}
      </GlobalContext.Provider>
    </div>
  );
}
