import "../styles/globals.css";

if (typeof window !== "undefined") {
  // @ts-ignore - @types/tw-elements가 현재 없습니다.
  import("tw-elements");
}
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
