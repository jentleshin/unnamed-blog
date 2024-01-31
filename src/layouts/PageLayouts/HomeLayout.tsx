import React, { useState } from "react";
import { ARTICLES } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { combineClasses } from "../../utils/utils";
import { Display } from "../../components";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  useUiStateCurrent,
  useGetUiStateCurrent,
  useUiState,
} from "../../hooks/useUIState";
import { TArticles, TViews } from "../../shared/interfaces";
import UIMotion from "../../components/UIMotion";
interface IProps {
  children?: any;
}

interface IContentProps {
  children: any;
  title: string;
}
const Content = ({ children, title }: IContentProps) => {
  return (
    <div className="grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,auto)_minmax(0,1fr)]">
      <Display plaintitle>{title}</Display>
      {children}
    </div>
  );
};

const HomeLayout = ({ children }: IProps) => {
  const childrenArray = React.Children.toArray(children);
  const currentArticle = useGetUiStateCurrent("article");
  const [[currentPage, animatePage], setPage] = useUiState("page");
  const [currentView, setView] = useUiStateCurrent("view");
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
          <UIMotion
            uiStateAnimate={animatePage}
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "100%", opacity: 0 }}
            className="grid gap-[24px] grid-cols-[minmax(0,1fr)_minmax(0,2fr)] grid-rows-[minmax(0,1fr)]"
          >
            <div className="grid gap-[24px] grid-cols-[minmax(0,1fr)_minmax(0,auto)] grid-rows-[minmax(0,1fr)]">
              <Content title={"List"}>{childrenArray[0]}</Content>
              <div className="row-span-2 dark:bg-lime bg-organic w-[0.5px]" />
            </div>
            <UIMotion
              layout
              layoutId="content"
              drawLayout={(currentView as TViews) === "list"}
              className="grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)]"
            >
              <Content
                title={`${currentArticle}; ${
                  ARTICLES[currentArticle as TArticles].preview.articleTitle
                }`}
              >
                {childrenArray[1]}
              </Content>
            </UIMotion>
          </UIMotion>
        </div>
      </div>
      {/* ------------------------------------------------------------------------- */}
      <AnimatePresence>
        {(currentView as TViews) === "full" && (
          <motion.div
            key="background"
            initial={{ backgroundColor: "#1A151000" }}
            animate={{ backgroundColor: "#1A1510FF" }}
            exit={{ backgroundColor: "#1A151000" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className={combineClasses(
              "fixed top-0 left-0",
              "dark:text-lime text-organic",
              "grid grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] grid-rows-[minmax(0,1fr)]",
              "h-screen w-screen",
              "p-[24px]"
            )}
          >
            <UIMotion
              layout
              layoutId="content"
              drawLayout={(currentView as TViews) === "full"}
              className="col-start-2 grid gap-[24px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)]"
            >
              <Content
                title={`${currentArticle}; ${
                  ARTICLES[currentArticle as TArticles].preview.articleTitle
                }`}
              >
                {childrenArray[1]}
              </Content>
            </UIMotion>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={combineClasses(
          "fixed right-[24px] bottom-[24px]",
          "dark:text-lime text-organic",
          "z-30"
        )}
        onClick={() => setView(currentView === "list" ? "full" : "list")}
      >
        <Display plaintitle>full page</Display>
      </div>
    </>
  );
};
HomeLayout.displayName = "HomeLayout";
export default HomeLayout;
