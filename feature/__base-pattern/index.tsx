import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";
import { Test } from "../../service/temp-service";

function Presenter({ isLoading, error, data, isFetching }: Props) {
  if (isLoading) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + (error as Error)?.message}</>;
  const testData = data as Test;
  return (
    <>
      <Head>
        <title>브이하우스</title>
      </Head>
      <h1>{testData.id}</h1>
      <p>{testData.title}</p>
      <strong>👀 {testData.body}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}

export default withContainer(memo(Presenter));
