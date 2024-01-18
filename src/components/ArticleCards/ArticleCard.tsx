import LinkTo from "../LinkTo";
import { IArticleHeaderData } from "../../shared/interfaces";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import Image from "next/image";
import Display from "../Text/Display";
import Text from "../Text/Text";
import Seperator from "../Seperator";
import { useTheme } from "next-themes";
import { on } from "events";

interface IProp {
  article: IArticleHeaderData;
  onClick?: () => void;
}

const ArticleCard = ({ article, onClick }: IProp) => {
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
    // <div className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}>
    <>
      <div
        className={combineClasses(
          "relative",
          "w-full h-fit",
          "mb-[120px]",
          "flex flex-col"
        )}
        onClick={onClick}
      >
        <div className={combineClasses("relative aspect-[16/9]")}>
          <Image
            src={transformImagePaths(article.thumbnail)}
            alt={article.articleTitle}
            quality={100}
            fill={true}
            loader={imgLoader}
            sizes="50vw"
            className={combineClasses("object-cover")}
          />
        </div>

        <div>
          <Display token>{article.date}</Display>
          <Display title className={combineClasses("pt-0 pb-0 -mb-2")}>
            {article.codeName} ;
          </Display>
          <Display title>{article.articleTitle}</Display>
          <Display p>{article.shortIntro.slice(0, 100)}</Display>
          <div className="flex flex-row -mt-3">
            {article.tags.split(",").map((each, i) => (
              <Display token key={i} className="mr-2">
                #{each.trim()}
              </Display>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
