import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCards/ArticleCard";
import NotionPage from "../components/NotionPage"; // Update this path
import { TContents } from "../shared/interfaces";
import { CONTENTS } from "../../BLOG_CONSTANTS/_ARTICLES_LIST";

interface IProps {
  code: TContents;
}

export const Article = React.memo(
  React.forwardRef<HTMLElement, IProps>(({ code }, ref) => {
    const [recordMap, setRecordMap] = useState(null); // State to hold the fetched data

    useEffect(() => {
      console.log("code", code);
      const fetchArticle = async () => {
        try {
          const response = await fetch(`/api/notionPage?code=${code}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setRecordMap(data.recordMap);
        } catch (error) {
          console.error("Failed to fetch article:", error);
        }
      };
      fetchArticle();
    }, [code]);

    return (
      <>
        <ArticleCard article={CONTENTS[code].preview} />
        {recordMap && <NotionPage recordMap={recordMap} />}
        <div className="pb-[720px]" />
      </>
    );
  })
);

Article.displayName = "Article";
export default Article;
