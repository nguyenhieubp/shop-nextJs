import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../redux/slice/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "top" }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
}
