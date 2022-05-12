import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";
import Button from "../../components/common/button";

function AdminPresenter({ isLoading, error, data, isFetching, invalidate }: Props) {
  if (isLoading) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + error?.message}</>;
  return (
    <>
      <Head>
        <title>브이하우스 - 관리자</title>
      </Head>
      <h1>{data.id}</h1>
      <p>{data.title}</p>
      <strong>👀 {data.body}</strong>
      <div>
        <Button onClick={() => invalidate()}>refetch</Button>
      </div>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}

export default withContainer(memo(AdminPresenter));
