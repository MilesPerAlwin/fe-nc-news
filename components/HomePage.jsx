import ArticlesList from "./ArticlesList";
import Navigation from "./Navigation";
import SortByColumn from "./SortByColumn";

const HomePage = () => {
    return (
        <div>
            <h2>This is the Homepage</h2>
            <Navigation />
            <SortByColumn />
            <ArticlesList />
        </div>
    )
}

export default HomePage;