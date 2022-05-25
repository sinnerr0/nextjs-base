import { getTest, Test } from "../../service/temp-service";
import React, { ComponentType, useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";
import { PageProps } from "../../pages/_app";

export type Props = { invalidate: () => void } & ReturnType<typeof useQuery>;

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Signup(props: PageProps) {
    const result = useQuery<Test, Error>(["temp-service/test", 0], () => getTest(0));
    const queryClient = useQueryClient();
    const invalidate = useCallback(() => {
      queryClient.invalidateQueries(["temp-service/test", 0]);
    }, [queryClient]);

    const passProps = {
      ...props,
      ...result,
      invalidate,
    };

    return <WrappedComponent {...passProps} />;
  };
}
