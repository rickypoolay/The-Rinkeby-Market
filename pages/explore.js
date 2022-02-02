import { FilterIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import NFTCard from "../components/NFTCard";
import { NFTs } from "../Database/temp";

function Explore() {
  return (
    <div className="">
      <Head>
        <title>Explore | TRM</title>
        <meta
          name="this is a Rinkeby test site to view your NFTs and more."
          content="Rinkeby Market"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="">
        <div className="flex items-center justify-between w-full mb-5">
          <h2 className="text-2xl bg-gray-200 dark:bg-custom-lightgray inline-block p-2 uppercase underline sm:text-[2rem]">
            Explore
          </h2>
          <div className="bg-gray-200 dark:bg-custom-lightgray p-2">
            <FilterIcon className="w-7" />
          </div>
        </div>

        <div className="grid grid-cols-2 justify-evenly gap-y-10 gap-x-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {NFTs.map(({ id, title, creator, img, price, coin }) => (
            <NFTCard
              key={`${title}#${id}`}
              id={id}
              title={title}
              creator={creator}
              img={img}
              price={price}
              coin={coin}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Explore;
