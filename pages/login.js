import Head from "next/head";
import { useRouter } from "next/router";
import LoginCard from "../components/LoginCard";

function Login() {
  <Head>
    <title>Login | TRM</title>
    <meta
      name="this is a Rinkeby test site to view your NFTs and more."
      content="Rinkeby Market"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>;

  const router = useRouter();
  {
    // isAuthenticated && router.push("/");
  }
  return (
    <div className="">
      <section className="flex h-screen justify-center items-center">
        <LoginCard />
      </section>
    </div>
  );
}

export default Login;
