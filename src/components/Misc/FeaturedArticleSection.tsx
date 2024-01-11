import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST"
import { iArticle } from "../../shared/interfaces"
import FeaturedArticle from "../ArticleCards/FeaturedArticle"
import Seperator from "../Seperator"
import Text from "../Text"
import Header from "../Header"

const FeaturedArticleSection = () => {
    const featureArticles = SORTED_ARTICLES_BY_DATE.filter((article: iArticle) => article.featureArticle === true)
    return (

        featureArticles.length ?
            (<>
                <Header>
                    Featured Articles
                </Header>
                {
                    featureArticles.map((each, i) => (
                        <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} />
                    ))
                }

                
            </>) : null
    )
}

export default FeaturedArticleSection