"use client";
/**These are necessary imports / components for the page */
import { PageLayout, UIMotion } from "../src/components";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import { combineClasses } from "../src/utils/utils";
import { ReactLenis } from "@studio-freight/react-lenis";
import Articles from "../src/components/Misc/Articles";
import Article from "../src/Article";
import { useUiState } from "../src/hooks/useUIState";
import { TArticles, TProjects } from "../src/shared/interfaces";

const Home = () => {
  const [[currentArticle, animateArticle], setArticle] = useUiState("article");
  const [[currentProject, animateProject], setProject] = useUiState("project");
  const [[currentPage, animatePage], setPage] = useUiState("page");
  return (
    <PageLayout page={"article"} PAGE_SEO={DEFAULT_SEO}>
      <ReactLenis
        className={combineClasses(
          "h-full w-full",
          "overflow-y-auto scroll-auto scrollbar-hide"
        )}
      >
        {animatePage.value === "article" ? (
          <Articles
            article
            onSelectContent={(value) => setArticle(value)}
            selectContent={currentArticle as TArticles}
          />
        ) : (
          <Articles
            project
            onSelectContent={(value) => setProject(value)}
            selectContent={currentProject as TProjects}
          />
        )}
      </ReactLenis>
      <ReactLenis
        className={combineClasses(
          "relative",
          "h-full w-full",
          "overflow-y-scroll scroll-auto scrollbar-hide"
        )}
      >
        {animatePage.value === "article" ? (
          <UIMotion
            uiStateAnimate={animateArticle}
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "100%", opacity: 0 }}
          >
            <Article code={animateArticle.value as TArticles} />
          </UIMotion>
        ) : (
          <UIMotion
            uiStateAnimate={animateProject}
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "100%", opacity: 0 }}
          >
            <Article code={animateProject.value as TProjects} />
          </UIMotion>
        )}
      </ReactLenis>
    </PageLayout>
  );
};

export default Home;
