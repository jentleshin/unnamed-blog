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
import ArticleTags from "../Misc/ArticleTags";
import Image from "next/image";
import Text from "../Text";
import Seperator from "../Seperator";
import { useTheme } from "next-themes";
import { on } from "events";

interface IProp {
  cardType?: string;
  article: IArticleHeaderData;
  onClick?: () => void;
}

const ArticleCard = ({ cardType, article, onClick }: IProp) => {
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
          "group relative",
          "dark:bg-lime bg-organic dark:bg-opacity-[0.02] bg-opacity-[0.04] dark:text-lime text-organic",
          "w-full h-fit",
          "mb-[30px]",
          "flex",
          cardType == "full" ? "flex-col" : "flex-row-reverse"
        )}
        onClick={onClick}
      >
        {cardType == "full" && (
          <div
            className={combineClasses(
              "relative",
              cardType == "full" ? "h-[200px]" : "w-1/3 min-w-[200px]"
            )}
          >
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
        )}
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
          <Text title>{article.articleTitle}</Text>
          <Seperator className="max-w-0 transition-all ease-in-out duration-500 group-hover:max-w-16 text-left" />
          <Text p>{article.shortIntro.slice(0, 100)} ...</Text>
          <ArticleTags tags={article.tags} />
          <Text token>{article.date}</Text>
        </div>
        <Image
          src={transformImagePaths(
            theme === THEMES.DARK
              ? "/public/imp_assets/chizizic/dark-cover.svg"
              : "/public/imp_assets/chizizic/cover.svg"
          )}
          alt={article.articleTitle}
          quality={100}
          fill={true}
          loader={imgLoader}
          sizes="50vw"
          className={combineClasses(
            "object-cover",
            "opacity-0 group-hover:opacity-80",
            "transition-all ease-in-out duration-500"
          )}
        />
        {/* <div
          className={combineClasses(
            classes.article_card_footer,
            "mt-4 mb-3 flex items-center px-3"
          )}
        > */}
        {/* <div className={"flex items-center"}>
            <Avatar
              author={article.author}
              className="w-[40px] h-[40px] mr-3 text-xl"
            />
            <LinkTo
              href={"/blog?author=" + article.author.name}
              passHref
              className={combineClasses(
                classes.author_name,
                "text-sm font-medium"
              )}
            >
              {article.author.name}
            </LinkTo> */}
        {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p> */}
        {/* </div>
          <ArticleCardCategory category={article.category} /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ArticleCard;
