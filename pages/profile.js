import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisWeb3Api,
  useNFTBalances,
  useNativeBalance,
} from "react-moralis";
import { justNumbers, trunc } from "../components/functions";
import Navbar from "../components/Navbar";
import NFTCard from "../components/NFTCard";
function Profile() {
  const router = useRouter();
  const { getNFTBalances } = useNFTBalances();

  const { token } = useMoralisWeb3Api();
  const { account, logout, isAuthenticated, isAuthenticating } = useMoralis();
  const { getBalances, data: objectBalance, isLoading } = useNativeBalance();
  const balance = objectBalance.formatted;

  const [NFTs, setNFTs] = useState();
  const [NFTsLoading, setNFTsLoading] = useState(true);

  //Fetching NFTs
  useEffect(() => {
    getBalances({ params: { chain: "rinkeby" } });

    getNFTBalances({
      params: { chain: "rinkeby" },
      onSuccess: (e) => {
        //Clone results.
        const results = [...e.result];

        //If metadata is null, then reSync and fetch for that metadata using the uri link.
        const nullMetadatas = results.filter(
          (nft) =>
            !nft?.metadata || nft?.metadata === null || nft?.metadata == null
        );

        nullMetadatas?.map((nft) => {
          token?.reSyncMetadata({
            chain: "rinkeby",
            address: nft.token_address,
            token_id: nft.token_id,
            flag: "uri",
          });
        });

        //Parse Metadata from string to json
        const finalData = results.map((nft) => {
          nft.metadata = JSON.parse(nft.metadata);
          return nft;
        });

        console.log(finalData);
        setNFTs(finalData);
        setNFTsLoading(false);
      },
    });
  }, [account]);

  return (
    <div>
      <Navbar />
      <section>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl bg-gray-200 dark:bg-custom-lightgray h-14 inline-block p-2 uppercase underline sm:text-[2.25rem] sm:h-14">
            My Wallet
          </h2>

          <div className="border-3 h-full border-white" />
          {/* Account Info */}
          <div className="flex flex-col text-right">
            <h2 className="text-base bg-gray-200 dark:bg-custom-lightgray inline-block p-2 uppercase sm:text-xl">
              {trunc(0, 6, 4, 0, account)}
            </h2>

            <div className="inline-flex items-center text-right p-2 bg-gray-200 dark:bg-custom-lightgray ml-auto">
              <h2 className="text-base inline-block uppercase sm:text-xl ml-auto">
                {balance?.slice(0, -3)}
              </h2>
              <div className="relative w-6 h-6 mb-1 ml-2">
                <Image
                  src={
                    "https://downloads.coindesk.com/arc-hosted-images/eth.png"
                  }
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* NFTs Section */}
        <h3 className="text-xl block px-2 py-2 uppercase sm:text-2xl bg-gray-200 dark:bg-custom-lightgray text-center mx-auto">
          Owned NFTs
        </h3>
        <div className="flex gap-x-5 overflow-x-auto overflow-hidden p-6 scrollbar">
          {(NFTsLoading == false) & (NFTs?.length > 0) ? (
            NFTs?.map(({ metadata, token_id }) => (
              <NFTCard
                lockWidth={true}
                key={token_id}
                title={metadata?.name}
                img={metadata?.image}
                desc={metadata?.description}
              />
            ))
          ) : (
            <p className="w-full text-center bg-gray-200 dark:bg-custom-lightgray p-5">
              This wallet has no NFTs
            </p>
          )}
        </div>

        <div className="border border-gray-200 dark:border-custom-lightgray mt-6" />

        <div className="flex justify-center mt-10">
          <button
            className="bg-custom-bg-btn rounded-full py-4 px-6 border w-44 border-custom-bg-btn hover:border hover:border-white transition-all ease-out duration-200"
            onClick={() => {
              router.push("/explore");
              logout();
            }}
          >
            Sign Out
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
