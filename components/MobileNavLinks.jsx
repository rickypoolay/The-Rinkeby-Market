import { PhotographIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";

function MobileNavLinks() {
  const router = useRouter();
  return (
    <div>
      <div className="sm:hidden flex space-x-4 text-base items-center">
        <PhotographIcon
          className="w-6 cursor-pointer"
          onClick={() => router.push("/explore")}
        />
        <PlusCircleIcon
          className="w-6 cursor-pointer"
          onClick={() => router.push("/create")}
        />
        <svg
          className="w-6 h-6 white cursor-pointer"
          onClick={() => router.push("/wallet")}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLineCap="round"
          strokeLineJoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />{" "}
          <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
        </svg>

        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default MobileNavLinks;
