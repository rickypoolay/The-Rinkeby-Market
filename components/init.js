import React, { useEffect } from "react";
import { useMoralis, useNFTBalances } from "react-moralis";

function Init({ Children }) {
  const { isInitialized, isAuthenticated, isWeb3Enabled, enableWeb3 } =
    useMoralis();

  useEffect(() => {
    if (isInitialized && isAuthenticated && !isWeb3Enabled) {
      enableWeb3();
    }
  }, [isInitialized, isAuthenticated, isWeb3Enabled]);

  return <div></div>;
}

export default Init;
