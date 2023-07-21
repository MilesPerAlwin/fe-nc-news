import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { PostComment } from "../api";
import { useParams } from "react-router-dom";

const PostAComment = ({ setCommentsSection }) => {

    const { article_id } = useParams();

    const { user, setUser } = useContext(UserContext);
    const [newComment, setNewComment] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newComment.length < 1) {
            setIsError(true);
        } else {
            setIsLoading(true)
            setIsError(false);
            PostComment(newComment, user, article_id)
            .then((postedComment) => {
                setCommentsSection((currentComments) => {
                    return [postedComment, ...currentComments];
                })
            })
            .then(() => {
                setIsLoading(false);
            })
            setNewComment("");
        }
    }


    return (
        <form className="PostAComment" onSubmit={handleSubmit}>
            <p><label htmlFor="new-comment">Add a comment as {user}:</label></p>
            <p>
            <textarea 
                id="new-comment"
                value={newComment}
                onChange={(e) => {
                    setNewComment(e.target.value);
                }}
            />
            </p>
            <p><button 
                id="comment-button">Post comment</button></p>
            {isLoading ? <p className="waitPostComment">Thank you, {user}. Please wait while your comment is posted</p> : null}
            {isError ? <p className="errorMessagePostComment">Comment must not be blank. Please try again.</p> : null}
        </form>
    )
}

export default PostAComment;