/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import {
  ARTICLES,
  SORTED_ARTICLES_BY_DATE,
} from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import Articles from "../src/components/Misc/Articles";
import { combineClasses, transformImagePaths } from "../src/utils/utils";
import Section from "../src/components/Section";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "../Pages.module.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import Article from "../src/Article";

const Home = () => {
  const [selectArticle, setSelectArticle] = useState<string>("");
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <ReactLenis
        className={combineClasses(
          "h-full w-full",
          "overflow-y-auto scroll-auto scrollbar-hide"
        )}
      >
        <Articles
          onSelectArticle={setSelectArticle}
          selectArticle={selectArticle}
        />
      </ReactLenis>
      <ReactLenis
        className={combineClasses(
          "h-full w-full",
          "overflow-y-scroll scroll-auto scrollbar-hide"
        )}
      >
        {selectArticle && <Article value={ARTICLES[selectArticle]} />}
      </ReactLenis>
      {/* <Section
          ref={sectionRefs.onboarding}
          heading={sectionHeadings.onboarding}
        >
          <div className="w-full">
            <img
              src={transformImagePaths(
                "/public/imp_assets/chizizic/sphere.svg",
              )}
              alt={"sphere"}
              className="w-1/2 mx-auto object-cover"
            />
          </div>
        </Section>
        <Section ref={sectionRefs.home} heading={sectionHeadings.home}>
          <div className="text-left">
            <Text texttitle className="mt-6 italic md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </div>
        </Section>
        <Section ref={sectionRefs.featured} heading={sectionHeadings.featured}>
          <FeaturedArticleSection />
        </Section> */}
      {/* <Section ref={sectionRefs.archive} heading={sectionHeadings.archive}>
          <HomeNonFeatureArticles />
        </Section> */}
    </PageLayout>
  );
};

export default Home;
