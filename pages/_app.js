import "@/styles/globals.css";
import { useEffect } from "react";
import { loadTheme } from "@/helpers/Theme";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const init = async () => {
    loadTheme();
  };

  useEffect(() => {
    init();
  }, []);

  return getLayout(<Component {...pageProps} />);
  //   return <Component {...pageProps} />
}
