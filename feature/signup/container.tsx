import { useGetTest } from "../../service/tempService";
import React, { ComponentType, useCallback } from "react";
import { useQueryClient } from "react-query";
import { AppInitialProps } from "next/app";

export type Props = { invalidate: () => void } & ReturnType<typeof useGetTest>;

export type PageProps = {} | AppInitialProps;

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Signup(props: PageProps) {
    const result = useGetTest(0);
    const queryClient = useQueryClient();
    const invalidate = useCallback(() => queryClient.invalidateQueries(["tempService/test", 0]), [queryClient]);
    return <WrappedComponent {...result} invalidate={invalidate} />;
  };
}
