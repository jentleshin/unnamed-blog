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
import { useEffect } from "react";
import { iArticle, iProject } from "../shared/interfaces";
import ArticleCard from "../components/ArticleCards/ArticleCard";
import React from "react";
interface IProps {
  value?: iArticle | iProject;
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
  ({ value }, ref) => {
    if (value) {
      const Plant = PlantMap[value.preview.codeName];
      return (
        <>
          <ArticleCard article={value.preview} onClick={() => {}} />
          {Plant ? <Plant /> : null}
          <div className="pb-[720px]" />
        </>
      );
    } else {
      return null;
    }
  }
);

Article.displayName = "Article";
export default Article;
