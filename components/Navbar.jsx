import { MenuIcon } from "@heroicons/react/solid/";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

function Navbar() {
  const router = useRouter();
  const { isAuthenticated, logout } = useMoralis();
  return (
    <nav className="py-5 px-5 bg-gray-200 dark:bg-custom-lightgray flex justify-between items-center md:py-8">
      <h1
        className="cursor-pointer text-2xl sm:text-3xl select-none border p-1 border-custom-lightgray dark:border-white"
        onClick={() => router.push("/explore")}
      >
        The Rinkeby Market
      </h1>
      <MenuIcon className="w-8 h-8 cursor-pointer sm:hidden pb-1" />
      <div className="hidden space-x-10 uppercase text-sm sm:flex sm:text-base">
        <p
          className={`navlink ${
            router.route == "/explore"
              ? "border-b border-custom-lightgray dark:border-white"
              : "border-none underlineHover"
          }`}
          onClick={() => router.push("/explore")}
        >
          Explore
        </p>
        <p
          className={`navlink ${
            router.route == "/create"
              ? "border-b border-custom-lightgray dark:border-white"
              : "border-none underlineHover"
          }`}
          onClick={() => router.push("/create")}
        >
          Create
        </p>
        {isAuthenticated ? (
          <p
            className={`navlink ${
              router.route == "/profile"
                ? "border-b border-custom-lightgray dark:border-white"
                : "border-none underlineHover"
            }`}
            onClick={() => router.push("/profile")}
          >
            Profile
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => router.push("/login")}>
            Sign-in
          </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
