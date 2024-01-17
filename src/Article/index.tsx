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

interface IProps {
  value?: string;
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
    const Plant = PlantMap[value];
    return Plant ? <Plant /> : null;
  } else {
    return null;
  }
};

export default Article;
