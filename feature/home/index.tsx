import { withContainer, Props } from "./container";
import Head from "next/head";
import { memo } from "react";
import Button from "../../components/common/button";
import { ROUTE } from "../../constants";
import Link from "next/link";
import Image from "next/image";

function HomePresenter(_: Props) {
  return (
    <>
      <Head>
        <title>브이하우스</title>
      </Head>
      <main className={"flex justify-center items-center h-screen"}>
        <div className={"flex flex-col"}>
          <Link href={ROUTE.SIGNUP}>
            <a>
              <Button className={"m-1"}>회원가입</Button>
            </a>
          </Link>
          <Link href={ROUTE.ADMIN}>
            <a>
              <Button className={"m-1"}>관리자</Button>
            </a>
          </Link>
          <Image src={"/test-image.jpeg"} width={500} height={300} alt="" />
        </div>
      </main>
    </>
  );
}

export default withContainer(memo(HomePresenter));
