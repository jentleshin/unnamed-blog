// TODO: Dynamically import article components
import Amazon from "./how-to-setup-blog-1";
import Zen from "./how-to-setup-blog-2";
import Ivy from "./how-to-setup-blog";
import OakTree from "./how-to-write-your-first-article";
import Orchid from "./how-to-deploy-blog";
import Vine from "./home-layout";
import Tulip from "./blog-with-sidebar-layout";
import Sunflower from "./blog-with-centered-layout";
import Potato from "./all-components";
import Lily from "./style-guide";
import Cacti from "./icons";
import Moss from "./your-first-article";
import { TArticles, TProjects } from "../shared/interfaces";
import ArticleCard from "../components/ArticleCards/ArticleCard";
import React from "react";
import { CONTENTS } from "../../BLOG_CONSTANTS/_ARTICLES_LIST";
interface IProps {
  code: TArticles | TProjects;
}

const PlantMap: { [key: string]: () => JSX.Element } = {
  Ivy,
  OakTree,
  Orchid,
  Vine,
  Tulip,
  Sunflower,
  Potato,
  Lily,
  Cacti,
  Moss,
  Amazon,
  Zen,
};

export const Article = React.forwardRef<HTMLElement, IProps>(
  ({ code }, ref) => {
    const Plant = PlantMap[code];
    return (
      <>
        <ArticleCard article={CONTENTS[code].preview} />
        <Plant />
        <div className="pb-[720px]" />
      </>
    );
  }
);

Article.displayName = "Article";
export default Article;
