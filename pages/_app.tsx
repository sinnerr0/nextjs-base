import "../styles/globals.css";

if (typeof window !== "undefined") {
  // @ts-ignore - @types/tw-elements가 현재 없습니다.
  import("tw-elements");
}
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    // 의도치 않은 fetch 발생으로 인하여 서버 요청 부하를 줄이기 위한 설정
    queries: {
      staleTime: 100,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
