import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState();

  //Functions
  const findCachedTheme = () => {
    let htmlClasses = document.querySelector("html").classList;

    switch (localStorage.theme) {
      case "dark":
        htmlClasses.add("dark");
        return true;
        break;

      case "light":
        htmlClasses.remove("dark");
        return false;
        break;

      case undefined:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          htmlClasses.add("dark");
          localStorage.theme === "dark";
          return true;
        } else {
          htmlClasses.remove("dark");
          localStorage.theme === "light";
          return false;
        }
        break;

      default:
        break;
    }
  };

  const themeSwitcherHandler = () => {
    let htmlClasses = document.querySelector("html").classList;

    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  useEffect(() => {
    setDarkMode(findCachedTheme);
  }, []);
  return (
    <button
      className={`p-2 rounded-full transition-all duration-200 hover:scale-110  ease-in-out ${
        darkMode
          ? "bg-white bg-opacity-80 text-custom-lightgray hover:white hover:bg-opacity-100 hover:-rotate-[110deg]"
          : "bg-custom-lightgray bg-opacity-80 text-white hover:bg-opacity-100 hover:-rotate-[20deg]"
      }`}
      onClick={() => themeSwitcherHandler()}
    >
      {darkMode ? (
        <SunIcon className={`w-3 sm:4`} />
      ) : (
        <MoonIcon className={"w-3 sm:4"} />
      )}
    </button>
  );
}

export default ThemeSwitcher;
