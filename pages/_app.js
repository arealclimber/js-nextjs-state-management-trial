import StoreContextProvider from "@/context/store_context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-500 w-screen h-screen pt-10">
      <StoreContextProvider>
        <Component {...pageProps} />{" "}
      </StoreContextProvider>
    </div>
  );
}
