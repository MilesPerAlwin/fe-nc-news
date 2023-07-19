import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getArticleById } from '../api';
import CommentsList from './CommentsList';

const IndividualArticle = () => {

    const { article_id } = useParams();

    const [individualArticle, setIndividualArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
        .then((receivedArticle) => {
            setIndividualArticle(receivedArticle);
        })
        .then(() => {
            setIsLoading(false);
        })
    },[])


    return isLoading ? (<h2 className="loadingArticle">Loading article...</h2>) : (
        <main className="browseArticlesContainer">
            <section className="articleBox bothSides">
            <div className="articleGrid1">
                <p>Topic: {individualArticle.topic}</p>
                <p>Posted by {individualArticle.author} on {individualArticle.created_at}</p>
            </div>
                <h2>{individualArticle.title}</h2>
                <img 
                    className="articleImg individualImg"
                    src={individualArticle.article_img_url}
                    alt={`${individualArticle.topic} photo`}
                />
                <p className="articleBody">{individualArticle.body}</p>
                <p>{individualArticle.votes} votes (to add upvote/downvote button here)</p>
            </section>
            <section className="articleBox bothSides">
                <h3>Comments ({individualArticle.comment_count})</h3>
                <p>comments box here to post comment</p>
                < CommentsList />
            </section>
        </main>
    )
}

export default IndividualArticle;