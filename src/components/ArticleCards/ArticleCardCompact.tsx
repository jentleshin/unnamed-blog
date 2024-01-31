import { IContentHeaderData } from "../../shared/interfaces";
import { combineClasses, transformImagePaths } from "../../utils/utils";
import { THEMES } from "../../shared/enums";
import Avatar from "../Misc/Avatar";
import ArticleCardCompactCategory from "../Misc/ArticleCardCategory";
import Image from "next/image";
import Display from "../Text/Display";
import { useTheme } from "next-themes";

interface IProp {
  article: IContentHeaderData;
  onClick?: () => void;
  selected?: boolean;
}

const ArticleCardCompact = ({ article, onClick, selected }: IProp) => {
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
        <div className={combineClasses("p-[12px]")}>
          {/* <Display
            subtitle
            className={combineClasses(
              classes.featured_article__code,
              "pt-0 pb-0 -mb-2"
            )}
          >
            {article.codeName + " ;"}
          </Display> */}
          <Display token>{article.date}</Display>

          <Display subtitle>{article.articleTitle}</Display>
          <Display p>{article.shortIntro}</Display>

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
