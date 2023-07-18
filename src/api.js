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