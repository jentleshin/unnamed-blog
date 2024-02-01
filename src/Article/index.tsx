import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCards/ArticleCard";
import NotionPage from "../components/NotionPage"; // Update this path
import { TContents } from "../shared/interfaces";
import { CONTENTS } from "../../BLOG_CONSTANTS/_ARTICLES_LIST";

interface IProps {
  code: TContents;
}

export const Article = React.forwardRef<HTMLElement, IProps>(
  ({ code }, ref) => {
    const [recordMap, setRecordMap] = useState(null); // State to hold the fetched data

    useEffect(() => {
      // Fetch the article content when the component mounts
      const fetchArticle = async () => {
        try {
          const response = await fetch(`/api/notionPage?code=${code}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setRecordMap(data.recordMap); // Update the state with the fetched data
        } catch (error) {
          console.error("Failed to fetch article:", error);
        }
      };

      fetchArticle();
    }, [code]); // Dependency array, re-run the effect if 'code' changes

    return (
      <>
        <ArticleCard article={CONTENTS[code].preview} />
        {recordMap && <NotionPage recordMap={recordMap} />}
        <div className="pb-[720px]" />
      </>
    );
  }
);

Article.displayName = "Article";
export default Article;
