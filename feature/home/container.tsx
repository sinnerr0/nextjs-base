import React, { ComponentType } from "react";
import { PageProps } from "../../pages/_app";

export type Props = {};

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Home(_: PageProps) {
    return <WrappedComponent />;
  };
}
