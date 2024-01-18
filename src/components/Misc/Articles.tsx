import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { iArticle } from "../../shared/interfaces";
import ArticleCardCompact from "../ArticleCards/ArticleCardCompact";
import React from "react";

interface IProp {
  onSelectArticle: (articleId: string) => void;
  selectArticle: string;
}

const Articles = ({ onSelectArticle, selectArticle }: IProp) => {
  const restArticles = SORTED_ARTICLES_BY_DATE.filter(
    (article: iArticle) => !article.featureArticle
  );
  const articlesToDisplay = 9;
  return (
    <>
      {SORTED_ARTICLES_BY_DATE.length
        ? SORTED_ARTICLES_BY_DATE.slice(0, articlesToDisplay).map((each, i) => (
            <React.Fragment key={each.preview.codeName}>
              <ArticleCardCompact
                article={each.preview}
                onClick={() => onSelectArticle(each.preview.codeName)}
                selected={selectArticle == each.preview.codeName}
              />
              <div className="dark:bg-lime bg-organic h-[0.5px]" />
            </React.Fragment>
          ))
        : null}
    </>
  );
};

export default Articles;
