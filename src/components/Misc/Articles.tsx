import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { iArticle } from "../../shared/interfaces";
import ArticleCard from "../ArticleCards/ArticleCard";
import LinkTo from "../LinkTo";

interface IProp {
  onSelectArticle: (articleId: string) => void;
}

const Articles = ({ onSelectArticle }: IProp) => {
  const restArticles = SORTED_ARTICLES_BY_DATE.filter(
    (article: iArticle) => !article.featureArticle
  );
  const articlesToDisplay = 9;
  return (
    <>
      {SORTED_ARTICLES_BY_DATE.length
        ? SORTED_ARTICLES_BY_DATE.slice(0, articlesToDisplay).map((each, i) => (
            <ArticleCard
              article={each.preview}
              path={each.path}
              key={each.path + i}
              onClick={() => onSelectArticle(each.preview.codeName)}
              cardType="compact"
            />
          ))
        : null}

      {/* {restArticles.length > articlesToDisplay ? (
        <div className="flex items-center">
          <LinkTo
            href="/pages/blog"
            className="
                w-auto h-auto text-sm py-3 px-10 
                text-center dark:bg-slate-800 
                bg-blue-500 rounded-full mx-auto text-white font-bold 
                transition-all"
          >
            View All Articles
          </LinkTo>
        </div>
      ) : null} */}
    </>
  );
};

export default Articles;
