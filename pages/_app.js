import { MoralisProvider, useMoralis } from "react-moralis";
import Init from "../components/init";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="YARa8L235w1QbKrhKBQAeBow8wryT6r303QoFSgS"
      serverUrl="https://1mx7ny4ffx6y.usemoralis.com:2053/server"
    >
      <Init />
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
