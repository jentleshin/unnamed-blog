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
import { iArticle } from "../shared/interfaces";
import ArticleCard from "../components/ArticleCards/ArticleCard";
interface IProps {
  value?: iArticle;
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
};

export const Article = ({ value }: IProps) => {
  useEffect(() => {}, [value]);
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
};

export default Article;
