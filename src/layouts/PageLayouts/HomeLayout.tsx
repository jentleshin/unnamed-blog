import React, { useState } from "react";
import { ARTICLES } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { combineClasses } from "../../utils/utils";
import { Display } from "../../components";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useUiState } from "../../hooks/useUIState";

interface IProps {
  children?: any;
}

const HomeLayout = ({ children }: IProps) => {
  const childrenArray = React.Children.toArray(children);
  const [fullView, setFullView] = useState(false);
  return (
    <>
      <div
        className={combineClasses(
          "bg-transparent dark:text-lime text-organic",
          "h-screen w-screen",
          "grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,auto)_minmax(0,1fr)]",
          "p-[24px]"
        )}
      >
        <div>
          <div className="dark:bg-lime bg-organic h-[0.5px]" />
          <Navbar />
          <div className="dark:bg-lime bg-organic h-[0.5px]" />
        </div>
        <div
          className={combineClasses(
            "relative overflow-x-clip",
            "grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)]"
          )}
        >
          <AnimatePresence mode="popLayout">
            {/* {currentPage && ( */}
            <div
              // key={currentPage}
              // initial={{ translateX: "-100%", opacity: 0 }}
              // animate={{ translateX: "0%", opacity: 1 }}
              // exit={{ translateX: "100%", opacity: 0 }}
              // transition={{ type: "spring", bounce: 0 }}
              className="grid gap-[24px] grid-cols-[minmax(0,1fr)_minmax(0,2fr)] grid-rows-[minmax(0,1fr)]"
            >
              <div className="grid gap-[24px] grid-cols-[minmax(0,1fr)_minmax(0,auto)] grid-rows-[minmax(0,auto)_minmax(0,1fr)]">
                <Display plaintitle>List</Display>
                <div className="row-span-2 dark:bg-lime bg-organic w-[0.5px]" />
                {childrenArray[0]}
              </div>

              {/* {(UIState=="view") ? (
                  !isFullView && (
                    <motion.div
                      layoutId="content"
                      transition={{ type: "spring", bounce: 0 }}
                      className="grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,auto)_minmax(0,1fr)]"
                    >
                      <Display plaintitle>
                        {currentArticle
                          ? `${currentArticle}; ${ARTICLES[currentArticle].preview.articleTitle}`
                          : "Content"}
                      </Display>
                      {childrenArray[1]}
                    </motion.div>
                  )
                ) : ( */}
              <div className="grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,auto)_minmax(0,1fr)]">
                <Display plaintitle>
                  {/* {currentArticle
                        ? `${currentArticle}; ${ARTICLES[currentArticle].preview.articleTitle}`
                        : "Content"} */}
                </Display>
                {childrenArray[1]}
              </div>
              {/* )} */}
            </div>
            {/* )} */}
          </AnimatePresence>
        </div>
      </div>
      {/* ------------------------------------------------------------------------- */}
      {/* <AnimatePresence>
        {isFullView && (
          <motion.div
            key="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", bounce: 0 }}
            className="fixed top-0 left-0 w-full h-full dark:bg-organic bg-lime"
          />
        )}
      </AnimatePresence> */}
      {/* {isFullView && (
        <div
          className={combineClasses(
            "fixed top-0 left-0",
            "bg-transparent dark:text-lime text-organic",
            "grid grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] grid-rows-[minmax(0,1fr)]",
            "h-screen w-screen",
            "p-[24px]"
          )}
        >
          <motion.div
            layoutId="content"
            transition={{ type: "spring", bounce: 0 }}
            className={combineClasses(
              "col-start-2",
              "grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,auto)_minmax(0,1fr)]"
            )}
          >
            <Display plaintitle>
              {currentArticle
                ? `${currentArticle} ; ${ARTICLES[currentArticle].preview.articleTitle}`
                : "Content"}
            </Display>
            {childrenArray[1]}
          </motion.div>
        </div>
      )} */}
      <div
        className={combineClasses("fixed right-[24px] bottom-[24px]", "z-30")}
        onClick={() => setFullView(!fullView)}
      >
        <Display plaintitle>full page</Display>
      </div>
    </>
  );
};
HomeLayout.displayName = "HomeLayout";
export default HomeLayout;
