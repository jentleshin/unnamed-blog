import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST"
import { iArticle } from "../../shared/interfaces"
import FeaturedArticle from "../ArticleCards/FeaturedArticle"
import React from "react"

const FeaturedArticleSection = () => {
    const featureArticles = SORTED_ARTICLES_BY_DATE.filter((article: iArticle) => article.featureArticle === true)
    return (
        featureArticles.length ?
            (<>
                {
                    featureArticles.map((each, i) => (
                        <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} />
                    ))
                }

                
            </>) : null
    )
}

export default FeaturedArticleSection