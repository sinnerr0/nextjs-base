import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";
import Button from "../../components/common/button";

function LoginPresenter({ login }: Props) {
  return (
    <>
      <Head>
        <title>브이하우스 - 로그인</title>
      </Head>
      <div>
        <Button onClick={() => login()}>login</Button>
      </div>
    </>
  );
}

export default withContainer(memo(LoginPresenter));
