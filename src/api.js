import axios from 'axios';

// investigate why error for using axios.create
const ncNewsApi = axios.create({
    baseUrl: "https://nc-news-service.onrender.com/api"
})

export const getArticles = () => {
    return axios.get("https://nc-news-service.onrender.com/api/articles")
    .then((res) => {
        return(res.data.articles);
    })
}

export const getArticleById = (article_id) => {
    return axios.get(`https://nc-news-service.onrender.com/api/articles/${article_id}`)
    .then((res) => {
        return(res.data.article);
    })
}

export const getCommentsById = (article_id) => {
    return axios.get(`https://nc-news-service.onrender.com/api/articles/${article_id}/comments`)
    .then((res) => {
        return(res.data.comments);
    })
}

export const patchArticleVotes = (article_id, buttonClicked) => {

    const patchRequestBody = { inc_votes: 0 }
    
    if (buttonClicked === "upvote") {
        patchRequestBody.inc_votes++;
    } else 
    if (buttonClicked === "downvote") {
        patchRequestBody.inc_votes--;
    }
    
    return axios.patch(`https://nc-news-service.onrender.com/api/articles/${article_id}`, patchRequestBody)
    .then((res) => {
        return(res.data.article.votes);
    })
}

export const PostComment = (comment, username, article_id) => {
    
    const postRequestBody = { "username": username, "body": comment }

    return axios.post(`https://nc-news-service.onrender.com/api/articles/${article_id}/comments`, postRequestBody)
    .then((res) => {
        return(res.data.comment);
    })
}