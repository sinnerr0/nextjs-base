import type { NextPage } from "next";
import Link from "next/link";
import Button from "../components/common/button";
import { ROUTE } from "../constants";
import Head from "next/head";

const Home: NextPage = () => {
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
        </div>
      </main>
    </>
  );
};

export default Home;
