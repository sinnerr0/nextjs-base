import React, { ComponentType, useCallback } from "react";
import { useQueryClient } from "react-query";
import { login } from "../../service/auth-service";
import { useRouter } from "next/router";
import { CLIENT, ROUTE } from "../../constants";
import { getClientData, removeClientData, setClientData } from "../../service/client-service";
import { PageProps } from "../../pages/_app";

export type Props = { login: () => Promise<void> };

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Login(_: PageProps) {
    const queryClient = useQueryClient();
    const router = useRouter();

    const loginAction = useCallback(async () => {
      const res = await login();
      setClientData(CLIENT.AUTH, () => res, queryClient);
      const redirect = getClientData<string>(CLIENT.REDIRECT, queryClient);
      if (redirect) {
        removeClientData(CLIENT.REDIRECT, queryClient);
        router.replace(redirect);
      } else {
        router.replace(ROUTE.HOME);
      }
    }, [queryClient, router]);

    const passProps = {
      login: loginAction,
    };

    return <WrappedComponent {...passProps} />;
  };
}
