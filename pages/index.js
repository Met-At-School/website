import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showSettings, setShowSettings] = useState(false);

  const [theme, setTheme] = useState("CLS");

  const themes = {
    CLS: {
      class: "clsBg",
    },
    PMK: {
      class: "pmkBg",
    },
    WTR: {
      class: "wtrBg",
    },
    HAX: {
      class: "haxBg",
    },
  };

  const settings = (
    <>
      <header className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <button
          className="text-4xl hover:bg-white hover:text-[#2002A5] uppercase"
          onClick={() => setShowSettings(false)}
        >
          exit
        </button>
      </header>
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <h1 className="sm:text-6xl font-extrabold tracking-tight text-3xl">
              {theme === "CLS" ? <span>----</span> : ""} Settings{" "}
              {theme === "CLS" ? <span>----</span> : ""}
            </h1>
            <ul className="mt-16 sm:text-5xl text-2xl">
              <li className="mt-2">
                <span>Theme:</span>
                <button
                  className={`${
                    theme === "CLS"
                      ? "bg-white text-[#2002A5]"
                      : "bg-transparent hover:bg-white hover:text-[#2002A5]"
                  } ml-4`}
                  onClick={() => setTheme("CLS")}
                >
                  <span>CLS</span>
                </button>
                <button
                  className={`${
                    theme === "PMK"
                      ? "bg-white text-[#2002A5]"
                      : "bg-transparent hover:bg-white hover:text-[#2002A5]"
                  } ml-4`}
                  onClick={() => setTheme("PMK")}
                >
                  <span>PMK</span>
                </button>
                <button
                  className={`${
                    theme === "WTR"
                      ? "bg-white text-[#2002A5]"
                      : "bg-transparent hover:bg-white hover:text-[#2002A5]"
                  } ml-4`}
                  onClick={() => setTheme("WTR")}
                >
                  <span>WTR</span>
                </button>
                <button
                  className={`${
                    theme === "HAX"
                      ? "bg-white text-[#2002A5]"
                      : "bg-transparent hover:bg-white hover:text-[#2002A5]"
                  } ml-4`}
                  onClick={() => setTheme("HAX")}
                >
                  <span>HAX</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
  return (
    <>
      <div
        className={`min-h-full pt-16 pb-12 flex flex-col uppercase ${themes[theme].class}`}
      >
        {showSettings ? (
          settings
        ) : (
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <h1 className="sm:text-6xl font-extrabold tracking-tight text-3xl">
                  {theme === "CLS" ? <span>----</span> : ""} Met At School{" "}
                  {theme === "CLS" ? <span>----</span> : ""}
                </h1>
                <p className="mt-4 sm:text-xl text-lg">
                  The DAO for <span className="underline">builders</span> and{" "}
                  <span className="underline">creatives</span>
                </p>
                <ul className="mt-16 sm:text-5xl text-2xl">
                  <li className="mt-2 hover:bg-white hover:text-[#2002A5]">
                    <Link href="https://metatschool.notion.site/Manifesto-8981d5ab87fc4075b32653b415500a64">
                      <a>Manifesto</a>
                    </Link>
                  </li>
                  <li className="mt-2 hover:bg-white hover:text-[#2002A5] cursor-wait">
                    Join
                  </li>
                  <li className="mt-2 hover:bg-white hover:text-[#2002A5] cursor-wait">
                    Twitter
                  </li>
                  <li
                    className="mt-2 hover:bg-white hover:text-[#2002A5] cursor-pointer"
                    onClick={() => setShowSettings(true)}
                  >
                    Settings
                  </li>
                </ul>
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
}
