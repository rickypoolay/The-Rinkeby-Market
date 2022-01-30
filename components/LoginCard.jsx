import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

function LoginCard() {
  const router = useRouter();
  const { authenticate, authError } = useMoralis();
  return (
    <div className="bg-custom-lightgray text-center p-5 max-w-[20rem] lg:p-10 lg:max-w-2xl lg:text-2xl">
      <h1 className="text-3xl mb-5 lg:text-5xl">NFT MARKETPLACE</h1>
      <p className="mb-5 text-xs lg:text-lg">
        NFT MARKETPlACE relies on MetaMask wallet. Sign in with a MetaMask
        wallet to create, sell, and buy NFTs. If you do not have a MetaMask
        wallet, you may download and create a wallet using MetaMask here:
      </p>
      <a href="https://metamask.io/" className="block mb-5 underline">
        https://metamask.io/
      </a>

      {authError && (
        <p className="text-red-500 text-sm mb-2">
          {authError.name} {authError.message}
        </p>
      )}

      <button
        className="bg-custom-bg-btn rounded-full py-4 px-6 border border-custom-bg-btn hover:border hover:border-white transition-all ease-out duration-200 "
        onClick={() =>
          authenticate({ onSuccess: () => router.push("/explore") })
        }
      >
        <div className="flex items-center justify-center">
          <p className="">Sign in with MetaMask</p>
          <div className="relative h-5 w-5 ml-2">
            <Image
              src={"/images/metamask-logo.webp"}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default LoginCard;
