import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";
import Button from "../../components/common/button";
import { withAuth } from "../auth";
import { Test } from "../../service/temp-service";

function AdminPresenter({ isLoading, isIdle, error, data, isFetching, invalidate, logout }: Props) {
  if (isLoading) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + (error as Error)?.message}</>;
  if (isIdle) return <div></div>;
  const testData = data as Test;
  return (
    <>
      <Head>
        <title>브이하우스 - 관리자</title>
      </Head>
      <h1>{testData.id}</h1>
      <p>{testData.title}</p>
      <strong>👀 {testData.body}</strong>
      <div>
        <Button onClick={() => invalidate()}>Refetch</Button>
      </div>
      <div>
        <Button onClick={() => logout()}>logout</Button>
      </div>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}

export default withAuth(withContainer(memo(AdminPresenter)));
