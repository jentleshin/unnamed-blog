import { IArticleHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import { combineClasses, transformImagePaths, transformPath } from "../../utils/utils";
import LinkTo from "../LinkTo";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Text from "../Text";
import Seperator from "../Seperator";

interface IProp {
    article: IArticleHeaderData;
    path: string;
}


const FeaturedArticle = ({ article, path }: IProp) => {
    return (
        <>
            <LinkTo href={transformPath(path)} passHref className={combineClasses(classes.featured_article,
                'group dark:bg-lime dark:bg-opacity-[0.02] dark:text-lime bg-organic text-organic bg-opacity-[0.04]')}>
                <div className={'w-full md:w-[75%] lg:px-[50px] px-[15px] lg:py-[30px] py-[20px]'}>
                    {/* <div className={"mt-0 mb-[10px] flex items-center"}> */}
                        {/* <div className={"flex items-center"}>
                            <Avatar author={article.author} className="w-[50px] h-[50px] mr-3 text-xl" />
                            <LinkTo 
                                href={"/blog?author=" + article.author.name} 
                                passHref 
                                className={combineClasses(classes.author_name, 'text-[14px] md:text-[16px] my-0 font-medium')}>
                                {article.author.name}
                            </LinkTo> */}
                            {/* <p className={combineClasses(classes.author_name, 'text-[14px] md:text-[16px] my-0 font-medium')}>
                                {article.author.name}
                            </p> */}
                        {/* </div> */}
                        {/* <ArticleCardCategory category={article.category} /> */}
                    {/* </div> */}
                    <Text subtitle className={combineClasses(classes.featured_article__code, "pt-0 pb-0 -mb-2")} >
                        {article.codeName+" ;"}
                    </Text>
                    <Text plaintitle className={combineClasses(classes.featured_article__title, "italic")} >
                        {article.articleTitle}
                    </Text>
                    <div className="flex flex-wrap">
                        <Seperator className="max-w-0 transition-all ease-in-out duration-500 group-hover:max-w-32 text-left"/>
                    </div>
                    <Text p className={combineClasses(classes.featured_article__intro)}>
                        {article.shortIntro.slice(0, 150)} ...
                    </Text>
                    <ArticleTags tags={article.tags} />
                    <Text token className={combineClasses(classes.featured_article__date, "mt-2")}>{article.date}</Text>
                </div>
                <div className={combineClasses(classes.featured_article__image, 'relative rounded-sm overflow-hidden')} >
                    <img
                        src={transformImagePaths(article.thumbnail)} alt={article.articleTitle}
                        className="w-full h-full object-cover" />
                    <img src={transformImagePaths("/public/imp_assets/chizizic/cover.svg")} alt={article.articleTitle} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-500" />
                </div>
            </LinkTo>
        </>
    )
}

export default FeaturedArticle