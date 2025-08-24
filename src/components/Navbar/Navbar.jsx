import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { Links } from "../../utils/Sources";
import { Link } from "react-router";
import { Ellipsis, Moon, Sun, X } from "lucide-react";

const Navbar = () => {
  const headerMenuRef = useRef(null);
  const savedTheme = localStorage.getItem("theme");
  const root = document.body;
  //menu toggle
  const [menu, setMenu] = useState(false);
  //theme state Toggle
  const [theme, setTheme] = useState(() => {
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  //theme toggle handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  //menu toggle handler
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  useEffect(() => {
    if (theme === "light") {
      root.classList.remove("light-theme");
      root.classList.add("dark-theme");
    } else if (theme === "dark") {
      root.classList.remove("dark-theme");
      root.classList.add("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="fixed w-full flex items-center justify-between pb-button-y px-base-x pt-base-y z-1000 text-primary-text">
      <h1 className="text-logo font-bold font-display select-none text-primary-text">
        DEEP BREATHES
      </h1>
      <div className="header-right flex gap-3 text-button font-medium">
        <button
          className="bg-background-surface p-[0.7rem] rounded-full"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>

        <button className="hidden lg:flex items-center gap-2 px-button-x py-button-y text-white bg-accent-primary rounded-full">
          Let's Talk
        </button>

        <button
          className="px-button-x py-button-y hidden lg:flex items-center gap-2 bg-background-surface rounded-full"
          onClick={toggleMenu}
        >
          {menu ? "Close" : "Menu"}
        </button>

        <button
          className="p-[0.7rem] text-white lg:hidden items-center gap-2 bg-accent-primary rounded-full"
          onClick={toggleMenu}
        >
          {menu ? <X /> : <Ellipsis />}
        </button>
      </div>

      {/* <div className={`${menu? styles.headerMenuContainer: 'hidden'} bg-accent-primary absolute h-[100vh] w-full right-0 top-0 -z-40`}>
      </div> */}
      <div
        ref={headerMenuRef}
        className={`${menu ? styles.headerRightMenu : "hidden"} rounded-2xl pr-menu-x pl-menu-y py-menu-y bg-background-surface flex flex-col gap-4`}
      >
        {Links.map((link, index) => {
          return (
            <Link key={index} to={link.to} className="text-menu-items">
              {link.link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
