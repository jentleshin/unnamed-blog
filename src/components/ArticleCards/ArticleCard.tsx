import LinkTo from "../LinkTo";
import { IArticleHeaderData } from "../../shared/interfaces";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import classes from "./ArticleCard.module.scss";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Image from "next/image";
import Text from "../Text";
import Seperator from "../Seperator";
interface IProp {
  article: IArticleHeaderData;
  path: string;
}

const ArticleCard = ({ article, path }: IProp) => {
  // set url and path
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const imgLoader = ({ src, width, quality }: any) => {
    return `${origin}${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}>
      <LinkTo
        href={transformPath(path)}
        passHref
        className={combineClasses(
          classes.article_card,
          "group dark:bg-lime dark:bg-opacity-[0.02] dark:text-lime bg-organic text-organic bg-opacity-[0.04] flex flex-col justify-between"
        )}
      >
        <div>
          <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>

            <Image
              src={transformImagePaths(article.thumbnail)}
              alt={article.articleTitle}
              layout="fill"
              quality={100}
              objectFit="cover"
              loader={imgLoader}
            />
            <Image
              src={transformImagePaths("/public/imp_assets/chizizic/cover.svg")}
              alt={article.articleTitle}
              className="opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-500"
              layout="fill"
              quality={100}
              objectFit="cover"
              loader={imgLoader}
            />
          </div>

          <div className={"px-[30px] py-[30px]"}>
            {/* <Text subtitle className={combineClasses(classes.featured_article__code, "pt-0 pb-0 -mb-2")} >
                        {article.codeName+" ;"}
            </Text> */}
            <LinkTo href={transformPath(path)} passHref>
              <Text plaintitle className="md:text-2xl italic pt-0"> 
                {article.articleTitle}
              </Text>
              <div className="flex flex-wrap">
                <Seperator className="max-w-0 transition-all ease-in-out duration-500 group-hover:max-w-16 text-left"/>
              </div>
            </LinkTo>
            <Text 
              p className={combineClasses(
                classes.article_card__intro,
                "text-sm font-normal mt-2 md:mt-1"
              )}
            >
              {article.shortIntro.slice(0, 100)} ...
            </Text>
            <ArticleTags tags={article.tags} />
            <Text token>
              {article.date}
            </Text>
          </div>
        </div>
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
      </LinkTo>
    </div>
  );
};

export default ArticleCard;
