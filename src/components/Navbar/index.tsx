import { NavbarType, THEMES } from "../../shared/enums";
import SimpleNavbar from "./SimpleNavbar";
import { useEffect, useState } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  getDeviceType,
  removeBodyNoScroll,
  webShare,
} from "../../utils/utils";
import Search from "../Search";
import { PRIMARY_NAV } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { useTheme } from "next-themes";
import classes from "./Navbar.module.scss";
import SocialShareModal from "../SocialShare/SocialShareModal";
import React from "react";

const Navbar = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

  useEffect(() => {
    showSearch
      ? addBodyNoScroll()
      : () => {
          return;
        };
    return () => {
      removeBodyNoScroll();
    };
  }, [showSearch]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [scrolled, setScrolled] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    setIsMobile(getDeviceType() === "tablet" || getDeviceType() === "mobile");

    window.onscroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const scrollYDistance = window.scrollY;
      if (scrollYDistance > 0 && st > lastScrollTop) {
        setScrolled(true);
      } else if (scrollYDistance > 50 && st < lastScrollTop) {
        setScrolled(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    return () => {
      setScrolled(false);
    };
  }, []);

  const openSearch = () => {
    setShowSearch(true);
  };

  const onShareClick = () => {
    if (!webShare()) {
      setOpenShareModal(true);
    }
  };

  return (
    <>
      <nav
        ref={ref}
        className={combineClasses(
          "w-full dark:bg-organic dark:text-lime bg-lime text-organic"
        )}
      >
        <SimpleNavbar
          openSearch={openSearch}
          changeTheme={changeTheme}
          navSetup={PRIMARY_NAV}
          onShareClick={onShareClick}
        />
      </nav>
      {showSearch && <Search closeSearch={() => setShowSearch(false)} />}

      {/* <SocialShareModal
        closeModal={() => setOpenShareModal(false)}
        openShareModal={openShareModal}
      /> */}
    </>
  );
});
Navbar.displayName = "Navbar";
export default Navbar;
