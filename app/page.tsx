"use client";
/**These are necessary imports / components for the page */
import { PageLayout, UIMotion } from "../src/components";
import { ARTICLES, PROJECTS } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import Articles from "../src/components/Misc/Articles";
import { combineClasses } from "../src/utils/utils";
import { ReactLenis } from "@studio-freight/react-lenis";
import Article from "../src/Article";
import { useGetUiStateCurrent, useUiState } from "../src/hooks/useUIState";
import { TArticles, TProjects } from "../src/shared/interfaces";
import { useEffect } from "react";

const Home = () => {
  const [[currentArticle, animateArticle], setArticle] = useUiState("article");
  const currentProject = useGetUiStateCurrent("project");
  useEffect(() => {
    console.log(currentProject);
  }, [currentProject]);
  return (
    <PageLayout page={"article"} PAGE_SEO={DEFAULT_SEO}>
      <ReactLenis
        className={combineClasses(
          "h-full w-full",
          "overflow-y-auto scroll-auto scrollbar-hide"
        )}
      >
        <Articles
          onSelectArticle={(value: TArticles) => setArticle(value)}
          selectArticle={currentArticle}
        />
      </ReactLenis>
      <ReactLenis
        className={combineClasses(
          "relative",
          "h-full w-full",
          "overflow-y-scroll scroll-auto scrollbar-hide"
        )}
      >
        <UIMotion
          uiStateAnimate={animateArticle}
          initial={{ translateX: "-100%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          exit={{ translateX: "100%", opacity: 0 }}
        >
          {/* <Article value={ARTICLES[animateArticle.value as TArticles]} /> */}
          <Article value={PROJECTS[currentProject as TProjects]} />
        </UIMotion>
      </ReactLenis>
    </PageLayout>
  );
};

export default Home;
