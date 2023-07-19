import ArticlesList from "./ArticlesList";
import Navigation from "./Navigation";
import SortByColumn from "./SortByColumn";

const HomePage = () => {
    return (
        <main>
            <Navigation />
            <div className="browseArticlesContainer">
            <SortByColumn />
            <ArticlesList />
            </div>
        </main>
    )
}

export default HomePage;