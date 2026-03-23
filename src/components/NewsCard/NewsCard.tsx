import type { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({article}: NewsCardProps) =>{
    return(
        <div className="card h-100">
            <img src = {article.socialimage} className="card-img-top" alt={article.title}/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.domain}</h5>
                <p className="card-text">{article.title} . {article.seendate}</p>
                <a href={article.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Ver noticia</a>
            </div>
        </div>
    );
}