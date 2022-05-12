import { useGetTest } from "../../service/tempService";
import React, { ComponentType } from "react";
import { AppInitialProps } from "next/app";

export type Props = ReturnType<typeof useGetTest>;
export type PageProps = {} | AppInitialProps;

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Page(props: PageProps) {
    const result = useGetTest(0);
    return <WrappedComponent {...result} />;
  };
}
