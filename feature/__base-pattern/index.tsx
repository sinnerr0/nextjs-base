import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";

function Presenter({ isLoading, error, data, isFetching }: Props) {
  if (isLoading) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + error?.message}</>;
  return (
    <>
      <Head>
        <title>브이하우스</title>
      </Head>
      <h1>{data.id}</h1>
      <p>{data.title}</p>
      <strong>👀 {data.body}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}

export default withContainer(memo(Presenter));
