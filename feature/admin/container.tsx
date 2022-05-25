import { getTest, Test } from "../../service/temp-service";
import React, { ComponentType, useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";
import { clearClientData, getClientData } from "../../service/client-service";
import { CLIENT, ROUTE } from "../../constants";
import { useRouter } from "next/router";
import { PageProps } from "../../pages/_app";

export type Props = { invalidate: Function; logout: Function } & ReturnType<typeof useQuery>;

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Admin(props: PageProps) {
    const queryClient = useQueryClient();
    const result = useQuery<Test, Error>(["temp-service/test", 1], () => getTest(1), {
      enabled: !!getClientData(CLIENT.AUTH, queryClient),
    });
    const router = useRouter();

    const invalidate = useCallback(() => {
      queryClient.invalidateQueries(["temp-service/test", 1]);
    }, [queryClient]);

    const logout = useCallback(() => {
      clearClientData(queryClient);
      router.push(ROUTE.HOME);
    }, [queryClient, router]);

    const passProps = {
      invalidate,
      logout,
    };
    return <WrappedComponent {...props} {...result} {...passProps} />;
  };
}
