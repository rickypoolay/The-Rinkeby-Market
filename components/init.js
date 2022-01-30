import React, { Children, useEffect } from "react";
import { useMoralis, useNFTBalances } from "react-moralis";

function Init({ Children }) {
  const { isInitialized, isAuthenticated, isWeb3Enabled, enableWeb3 } =
    useMoralis();
  let style;

  useEffect(() => {
    if (isInitialized && isAuthenticated && !isWeb3Enabled) {
      enableWeb3();
    }
  }, [isInitialized, isAuthenticated, isWeb3Enabled]);

  // const { getNFTBalances, data, isFetching, isLoading, error } =
  //   useNFTBalances();

  // useEffect(() => {
  //   getNFTBalances({ params: { chain: "rinkeby" } });
  // }, []);

  return <div></div>;
}

export default Init;
