import { useRouter } from "next/router";
import MobileNavLinks from "./MobileNavLinks";
import DesktopNavLinks from "./DesktopNavLinks";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="py-5 px-5 bg-gray-200 dark:bg-custom-lightgray flex justify-between items-center md:py-8 sticky top-0 z-50">
      {/* LOGO */}
      <h1
        className="cursor-pointer text-[1rem] sm:text-3xl select-none border p-1 border-custom-lightgray dark:border-white "
        onClick={() => router.push("/explore")}
      >
        The Rinkeby Market
      </h1>
      <div>
        <DesktopNavLinks />
        <MobileNavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
