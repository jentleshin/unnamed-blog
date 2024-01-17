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

interface IProp {
  article: IArticleHeaderData;
  onClick?: () => void;
}

const ArticleCardCompact = ({ article, onClick }: IProp) => {
  // set url and path
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
        <div className={combineClasses("px-[30px] py-[12px]")}>
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
          <Text title>{article.articleTitle}</Text>
          <Text p>{article.shortIntro.slice(0, 50)} ...</Text>
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
          sizes="50vw"
          className={combineClasses(
            "object-cover",
            "opacity-0 group-hover:opacity-80",
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
