import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { Link } from 'react-router-dom'


const ArticlesList = () => {

    const [articlesList, setArticlesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((receivedArticles) => {
            setArticlesList(receivedArticles);
        })
        .then(() => {
            setIsLoading(false);
        })
    }, [])


    return isLoading ? (<h2 className="loadingArticleList">Loading articles...</h2>) : (
            <section className="rightSide">
                <ul>
                    {articlesList.map((article) => {
                        return (
                            <li className="articleBox" key={article.article_id}>
                                <div className="articleGrid1">
                                <p>Topic: {article.topic}</p>
                                <p>Posted by {article.author}</p>
                                </div>
                                <h2><Link to={`/api/articles/${article.article_id}`}>{article.title}</Link></h2>
                                <img
                                    className="articleImg"
                                    src={article.article_img_url} 
                                    alt={`${article.topic} photo`} 
                                />
                                <div className="articleGrid2">
                                <p>{article.created_at}</p>
                                <p>{article.votes} votes</p>
                                <p>{article.comment_count} comments</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
    )
}

export default ArticlesList;