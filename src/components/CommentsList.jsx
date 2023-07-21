import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getCommentsById } from '../api';
import PostAComment from './PostAComment';

const CommentsList = () => {
    
    const { article_id } = useParams();
    
    const [commentsSection, setCommentsSection] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getCommentsById(article_id)
        .then((receivedComments) => {
            setCommentsSection(receivedComments);
        })
        .then(() => {
            setIsLoading(false);
        })

    },[])
    
    
    return isLoading ? (<p>Loading comments...</p>) : (
        <section className="commentsSection">
        < PostAComment setCommentsSection={setCommentsSection}/>
            <ul className="commentBox">
                {commentsSection.map((comment) => {
                    return (
                        <li className="individualComment" key={comment.comment_id}>
                            <div className="articleGrid1">
                            <p>{comment.author}</p>
                            <p>{comment.created_at}</p>
                            </div>
                            <p>{comment.body}</p>
                            <p>{comment.votes} votes</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CommentsList;