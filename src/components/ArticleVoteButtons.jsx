import { useState } from "react";
import { patchArticleVotes } from "../api";
import { useParams } from "react-router-dom";

const ArticleVoteButtons = (currentVotes) => {

    const { votes } = currentVotes;

    const { article_id } = useParams();
    
    const [userVotes, setUserVotes] = useState(votes);
    const [isError, setIsError] = useState(false);
    
    const handleClick = (buttonClicked) => {

        
        setUserVotes((currentUserVotes) => {
            
            if (buttonClicked === "upvote") {
                return currentUserVotes + 1;
            } else
            if (buttonClicked === "downvote") {
                return currentUserVotes - 1;
            }
        })
        
        patchArticleVotes(article_id, buttonClicked)
        .catch((err) => {
            
            console.log("err", err);
            setIsError(true);
            
            setUserVotes((currentUserVotes) => {
                
                if (buttonClicked === "upvote") {
                    return currentUserVotes - 1;
                } else
                if (buttonClicked === "downvote") {
                    return currentUserVotes + 1;
                }
                
            })
        })
        
        setIsError(false);
    }
    
    return (
        <div>
            <p>{userVotes} votes</p>
            <button className={userVotes > votes ? "upvoteClicked" : null} aria-label="upvote this article" 
            onClick={() => {handleClick("upvote")}}
            disabled={userVotes > votes}>👍</button>
            
            <button className={userVotes < votes ? "downvoteClicked" : null} 
            aria-label="downvote this article" 
            onClick={() => {handleClick("downvote")}}
            disabled={userVotes < votes}>👎</button>
            {isError ? <p className="errorMessage">Woops, something went wrong! Please try again.</p> : null}
        </div>
    )
}

export default ArticleVoteButtons;