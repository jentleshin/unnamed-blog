import LinkTo from "../LinkTo";
import { IArticleHeaderData } from "../../shared/interfaces";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import Avatar from "../Misc/Avatar";
import ArticleCardCompactCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Image from "next/image";
import Text from "../Text";
import Seperator from "../Seperator";
import { useTheme } from "next-themes";
import { on } from "events";
import { useEffect, useState } from "react";

interface IProp {
  article: IArticleHeaderData;
  onClick?: () => void;
  selected?: boolean;
}

const ArticleCardCompact = ({ article, onClick, selected }: IProp) => {
  // set url and path
  useEffect(() => {
    console.log("selected");
    console.log(selected);
  }, [selected]);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const imgLoader = ({ src, width, quality }: any) => {
    return `${origin}${src}?w=${width}&q=${quality || 75}`;
  };

  const { theme } = useTheme();

  return (
    <>
      <div
        className={combineClasses(
          "group relative",
          "w-full h-fit",
          "flex, flex-row-reverse"
        )}
        onClick={onClick}
      >
        <div className={combineClasses("px-[12px]")}>
          {/* <Text
            subtitle
            className={combineClasses(
              classes.featured_article__code,
              "pt-0 pb-0 -mb-2"
            )}
          >
            {article.codeName + " ;"}
          </Text> */}
          {/* <Text token>{article.date}</Text> */}
          <Text
            subtitle
            className={combineClasses(
              "md:text-base pb-[0px] text-ellipsis overflow-hidden whitespace-nowrap"
            )}
          >
            {article.articleTitle}
          </Text>
          <Text
            p
            className={combineClasses(
              "md:text-sm pt-[0px] opacity-80 text-ellipsis overflow-hidden whitespace-nowrap"
            )}
          >
            {article.shortIntro}
          </Text>
          {/* <ArticleTags tags={article.tags} /> */}
        </div>
        <Image
          src={transformImagePaths(
            theme === THEMES.DARK
              ? "/public/imp_assets/chizizic/cover.svg"
              : "/public/imp_assets/chizizic/dark-cover.svg"
          )}
          alt={article.articleTitle}
          quality={100}
          fill={true}
          loader={imgLoader}
          sizes="33vw"
          className={combineClasses(
            "object-cover",
            selected ? "opacity-80" : "opacity-0",
            "transition-all ease-in-out duration-500",
            "-z-10"
          )}
        />
        {/* </div>
          <ArticleCardCategory category={article.category} /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ArticleCardCompact;
