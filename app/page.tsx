"use client";
/**These are necessary imports / components for the page */
import { PageLayout } from "../src/components";
import { ARTICLES } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import Articles from "../src/components/Misc/Articles";
import { combineClasses } from "../src/utils/utils";
import { ReactLenis } from "@studio-freight/react-lenis";
import Article from "../src/Article";
import { motion, AnimatePresence } from "framer-motion";
import { useUiState } from "../src/hooks/useUIState";
import { TArticles } from "../src/shared/interfaces";

const Home = () => {
  const [
    { uiStateCurrent: currentArticle, uiStateAnimate: animateArticle },
    setUiState,
  ] = useUiState("article");

  return (
    <PageLayout page={"article"} PAGE_SEO={DEFAULT_SEO}>
      <ReactLenis
        className={combineClasses(
          "h-full w-full",
          "overflow-y-auto scroll-auto scrollbar-hide"
        )}
      >
        <Articles
          onSelectArticle={(value: TArticles) => setUiState("article", value)}
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
        {/* {changeArticle.isRoot ? ( */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${animateArticle.status}`}
            className={`${animateArticle.status}`}
            initial={
              animateArticle.init ? { translateX: "-100%", opacity: 0 } : {}
            }
            animate={{ translateX: "0%", opacity: 1 }}
            exit={animateArticle.exit ? { translateX: "100%", opacity: 0 } : {}}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            onAnimationComplete={() => {
              animateArticle.init && animateArticle.onInitCallback();
            }}
          >
            <Article value={ARTICLES[animateArticle.value as TArticles]} />
          </motion.div>
        </AnimatePresence>
      </ReactLenis>
    </PageLayout>
  );
};

export default Home;
