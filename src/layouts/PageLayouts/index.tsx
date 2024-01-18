import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import Navbar from "../../components/Navbar";
import { iSEO } from "../../shared/interfaces";
import { CREATE_SEO_CONFIG, useArticleDetails } from "../../utils/utils";
import Centered from "./BlogCentered";
import WithSidebar from "./BlogWithSidebar";
import HomeLayout from "./HomeLayout";
import { useRef, useEffect } from "react";

interface IBlogLayout {
  children: any;
  PAGE_SEO?: iSEO;
  blog?: boolean;
  home?: boolean;
  ads?: string[];
}

const PageLayout = ({
  children,
  PAGE_SEO,
  blog = false,
  home = false,
  ads = [],
}: IBlogLayout) => {
  const ARTICLE_DETAILS = useArticleDetails();
  let SEO_CONFIG = {};
  if (ARTICLE_DETAILS && ARTICLE_DETAILS.seo) {
    SEO_CONFIG = CREATE_SEO_CONFIG({ ...ARTICLE_DETAILS.seo });
  } else if (PAGE_SEO) {
    SEO_CONFIG = CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...PAGE_SEO });
  } else {
    SEO_CONFIG = CREATE_SEO_CONFIG({ ...DEFAULT_SEO });
  }

  // const navRef = useRef<HTMLDivElement>(null);
  // const mainRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const mainLayout = mainRef.current
  //     ?.querySelector("div")
  //     ?.querySelectorAll("section")?.[1];
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const { isIntersecting } = entry;
  //         if (navRef.current) {
  //           navRef.current.style.opacity = isIntersecting ? "1" : "0";
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: `100000px 0px ${-window.innerHeight}px 0px`,
  //       threshold: 0,
  //     }
  //   );

  //   mainLayout ? observer.observe(mainLayout) : null;
  //   return () => {
  //     mainLayout ? observer.unobserve(mainLayout) : null;
  //   };
  // }, []);

  return (
    <>
      <NextSeo {...SEO_CONFIG} />
      <HomeLayout>{children}</HomeLayout>
    </>
  );
};
export default PageLayout;
