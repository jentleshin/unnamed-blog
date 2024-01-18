import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iSEO } from "../../shared/interfaces";
import { CREATE_SEO_CONFIG, useArticleDetails } from "../../utils/utils";
import HomeLayout from "./HomeLayout";

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

  return (
    <>
      <NextSeo {...SEO_CONFIG} />
      <HomeLayout>{children}</HomeLayout>
    </>
  );
};
export default PageLayout;
