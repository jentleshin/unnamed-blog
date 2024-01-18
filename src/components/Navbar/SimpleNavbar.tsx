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
import { Text, Seperator } from "../../components";

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
                  <Text subtitle className="">
                    {logo.logo}
                  </Text>
                </a>
              )
            ) : (
              <a className="text-6xl font-semibold">Logo</a>
            )}
          </Link>
        </div>

        <div className="flex items-center">
          <Text subtitle className="items-center lg:flex hidden">
            {navLinks.map((each: iNavLink, i: any) =>
              !each.newTab ? (
                <LinkTo href={each.path} key={i} passHref className="mx-2">
                  {each.label}
                </LinkTo>
              ) : (
                <a
                  href={each.path}
                  key={each.path + 1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block mx-2 flex-wrap"
                >
                  {each.label}
                </a>
              )
            )}
            {/* {
              socials &&
              <div className="ml-5 pt-1">
                {
                  socials.map((each: iNavSocials, i: any) => (
                    <a href={each.link} key={i} target="_blank" rel="noopener noreferrer" className='text-[18px] inline-block mr-4'>{each.icon}</a>
                  ))
                }
              </div>
            } */}
          </Text>

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

          <div className="" onClick={() => onShareClick()}>
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
