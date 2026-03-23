import { useState, useEffect  } from 'react';
import { fetchSpanishNews } from "@/services/newsApi";
import type { NewsArticle } from "@/types/news";

export const useNews = () => {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        const loadNews = async () => {
            try {
                const data: NewsArticle[] = await fetchSpanishNews();
                setNews(data);
                setError(null);
            }
            catch (err){
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocurrió un error desconocido e inesperado al obtener las noticias!!!');
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadNews();
    }, []);

    return { news, loading, error };
};
