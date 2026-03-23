import type { NewsArticle } from "@/types/news";


interface NewsApiResponse {
  articles: NewsArticle[];
}
const NEWS_API_URL = "https://api.gdeltproject.org/api/v2/doc/doc?query=(tecnologia%20OR%20%22inteligencia%20artificial%22%20OR%20ciberseguridad%20OR%20software%20OR%20startup)%20sourcelang:spanish&mode=ArtList&format=json&sort=datedesc&maxrecords=12&timespan=24h";
export const fetchSpanishNews = async (): Promise<NewsArticle[]> =>{
    try{
        const response = await fetch(NEWS_API_URL);
        if (!response.ok){
            throw new Error(`Error al obtener las noticias: ${response.status}`);
        }
        const data: NewsApiResponse = await response.json();
        return data.articles;
    } catch (error) {
        console.error(`Error fetching Spanish news: ${error}`);
        throw error;
    }
}
