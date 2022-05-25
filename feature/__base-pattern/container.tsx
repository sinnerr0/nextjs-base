import { getTest, Test } from "../../service/temp-service";
import React, { ComponentType } from "react";
import { useQuery } from "react-query";
import { PageProps } from "../../pages/_app";

export type Props = ReturnType<typeof useQuery>;

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Page(_: PageProps) {
    const result = useQuery<Test, Error>(["temp-service/test", 0], () => getTest(0));
    return <WrappedComponent {...result} />;
  };
}
