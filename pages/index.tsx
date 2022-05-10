import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/common/Button";
import constants from "../constants";

const Home: NextPage = () => {
  return (
    <div>
      <main className={"flex justify-center items-center h-screen"}>
        <div>
          <Link href={constants.ROUTE.SIGNUP}>
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
