import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/explore");
  });

  return (
    <div>
      <Head>
        <title>THE RINKEBY MARKET</title>
        <meta
          name="this is a Rinkeby test site to view your NFTs and more."
          content="Rinkeby Market"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
