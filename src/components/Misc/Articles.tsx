import React from "react";
import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { SORTED_PROJECTS_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { TContents, iContent } from "../../shared/interfaces";
import ArticleCardCompact from "../ArticleCards/ArticleCardCompact";

interface iCommonProps {
  onSelectContent: (contentId: TContents) => void;
  selectContent: TContents;
}

interface IProjectProp extends iCommonProps {
  article?: false;
  project: true;
}

interface IArticleProp extends iCommonProps {
  article: true;
  project?: false;
}

type IProp = IProjectProp | IArticleProp;

const isArticleProp = (prop: IProp): prop is IArticleProp =>
  prop.article === true;

const Articles: React.FC<IProp> = (props) => {
  const contents: iContent[] = isArticleProp(props)
    ? SORTED_ARTICLES_BY_DATE
    : SORTED_PROJECTS_BY_DATE;

  return (
    <>
      {contents.map((each, i) => (
        <React.Fragment key={each.preview.codeName}>
          <ArticleCardCompact
            article={each.preview}
            onClick={() => props.onSelectContent(each.preview.codeName)}
            selected={props.selectContent === each.preview.codeName}
          />
          {i !== contents.length - 1 && (
            <div className="dark:bg-lime bg-organic dark:bg-opacity-50 bg-opacity-50 h-[0.5px]" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Articles;
