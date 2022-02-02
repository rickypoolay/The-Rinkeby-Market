import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

function Create() {
  return (
    <div>
      <Head>
        <title>Create | TRM</title>
        <meta
          name="this is a Rinkeby test site to view your NFTs and more."
          content="Rinkeby Market"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      create
    </div>
  );
}

export default Create;
