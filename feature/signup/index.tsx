import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";
import Button from "../../components/common/button";
import { Test } from "../../service/temp-service";

function SignUpPresenter({ isLoading, error, data, isFetching, invalidate }: Props) {
  if (isLoading) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + (error as Error)?.message}</>;
  let testData = data as Test;
  return (
    <>
      <Head>
        <title>브이하우스 - 회원가입</title>
      </Head>
      <h1>{testData.id}</h1>
      <p>{testData.title}</p>
      <strong>👀 {testData.body}</strong>
      <div>
        <Button onClick={() => invalidate()}>Refetch</Button>
      </div>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}

export default withContainer(memo(SignUpPresenter));
