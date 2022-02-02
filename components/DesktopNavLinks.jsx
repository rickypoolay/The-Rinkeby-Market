import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";
import { useMoralis } from "react-moralis";

function DesktopNavLinks() {
  const router = useRouter();
  const { isAuthenticated, logout } = useMoralis();
  return (
    <div className="hidden space-x-6 uppercase text-sm sm:flex sm:text-base sm:items-center md:space-x-10">
      {/* Explore Link */}
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

      {/* Create Link */}
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

      {/* Display signin or profile */}
      {isAuthenticated ? (
        <p
          className={`navlink ${
            router.route == "/profile"
              ? "border-b border-custom-lightgray dark:border-white"
              : "border-none underlineHover"
          }`}
          onClick={() => router.push("/wallet")}
        >
          Profile
        </p>
      ) : (
        <p className="cursor-pointer" onClick={() => router.push("/login")}>
          Sign-in
        </p>
      )}

      {/* Theme Switcher */}
      <ThemeSwitcher />
    </div>
  );
}
export default DesktopNavLinks;
