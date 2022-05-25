import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { CLIENT, ROUTE } from "../constants";
import { clearClientData, getClientData, setClientData } from "../service/client-service";
import { NextComponentType } from "next";
import { PageProps } from "../pages/_app";
import { useEffect } from "react";

export function withAuth(WrappedComponent: NextComponentType) {
  return function Auth(props: PageProps) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const auth = getClientData(CLIENT.AUTH, queryClient);
    useEffect(() => {
      if (router && !auth) {
        clearClientData(queryClient);
        setClientData(CLIENT.REDIRECT, () => router.pathname, queryClient);
        router.replace(ROUTE.LOGIN);
      }
    }, [auth, queryClient, router]);
    return <WrappedComponent {...props} />;
  };
}
