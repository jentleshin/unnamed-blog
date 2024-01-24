"use client";

/**These are necessary imports / components for the page */
import { PageLayout } from "../src/components";
import { ARTICLES } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import Articles from "../src/components/Misc/Articles";
import { combineClasses } from "../src/utils/utils";
import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Article from "../src/Article";
import { motion, AnimatePresence } from "framer-motion";
import { useChangeArticle } from "../src/hooks/useAnimation";

const Home = () => {
  const [currentArticle, changeArticle, isArticleChanged] = useChangeArticle();

  return (
    <PageLayout page={"article"} PAGE_SEO={DEFAULT_SEO}>
      <ReactLenis
        className={combineClasses(
          "h-full w-full",
          "overflow-y-auto scroll-auto scrollbar-hide"
        )}
      >
        <Articles
          onSelectArticle={changeArticle}
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
        <AnimatePresence mode="popLayout">
          {isArticleChanged ? (
            currentArticle && (
              <motion.div
                key={currentArticle}
                initial={{ translateX: "-100%", opacity: 0 }}
                animate={{ translateX: "0%", opacity: 1 }}
                exit={{ translateX: "100%", opacity: 0 }}
                transition={{ type: "spring", bounce: 0 }}
              >
                <Article value={ARTICLES[currentArticle]} />
              </motion.div>
            )
          ) : (
            <Article value={ARTICLES[currentArticle]} />
          )}
        </AnimatePresence>
      </ReactLenis>
    </PageLayout>
  );
};

export default Home;
