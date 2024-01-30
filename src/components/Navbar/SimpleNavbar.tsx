import Link from "next/link";
import { useEffect, useState } from "react";
import { combineClasses, transformImagePaths } from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import LinkTo from "../LinkTo";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill, BsFillShareFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import { iNavbar, iNavLink, iNavSocials } from "../../shared/interfaces";
import { Display } from "../../components";
import { useUiState } from "../../hooks/useUIState";

const SimpleNavbar = ({
  openSearch,
  changeTheme,
  navSetup,
  onShareClick,
}: iNavbar) => {
  // const { navLinks, socials, logo } = navSetup;
  const { navLinks, logo } = navSetup;
  const [openDD, setOpenDD] = useState(false);
  const { theme } = useTheme();
  const [_, setUiState] = useUiState("page");

  return (
    <div
      className={combineClasses(
        "container flex flex-col items-center justify-between"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" passHref legacyBehavior>
            {logo ? (
              logo.type === LogoType.IMAGE ? (
                <img
                  src={
                    theme === THEMES.DARK
                      ? transformImagePaths(logo.logoLight)
                      : transformImagePaths(logo.logo)
                  }
                  alt="WebExpe"
                  className="cursor-pointer"
                  width="100px"
                />
              ) : (
                <a>
                  <Display title className="">
                    {logo.logo}
                  </Display>
                </a>
              )
            ) : (
              <a className="text-6xl font-semibold">Logo</a>
            )}
          </Link>
        </div>

        <div className="flex items-center">
          <div
            className="m-[24px]"
            onClick={() => setUiState({ root: "page", after: "article" })}
          >
            <button name="archive" aria-label="archive page">
              <Display plaintitle>Archive</Display>
            </button>
          </div>

          <div
            className="m-[24px]"
            onClick={() => setUiState({ root: "page", after: "project" })}
          >
            <button name="project" aria-label="project page">
              <Display plaintitle>Project</Display>
            </button>
          </div>

          <div
            className={combineClasses(
              "w-auto flex relative items-center cursor-pointer",
              "ml-5"
            )}
            onClick={() => openSearch()}
          >
            <button name="search-button" aria-label="search button">
              <AiOutlineSearch className="text-[22px]" />
            </button>
          </div>

          <div onClick={() => onShareClick()}>
            <button name="share" aria-label="share page">
              <BsFillShareFill className=" text-[16px] mt-[7px] ml-2 mr-1" />
            </button>
          </div>

          <button
            name="theme-switch"
            aria-label="theme button"
            className={"pl-3"}
            onClick={changeTheme}
          >
            {theme && theme === "dark" ? (
              <BsFillSunFill className="text-2xl" />
            ) : (
              <BsFillMoonFill className="text-md " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleNavbar;
