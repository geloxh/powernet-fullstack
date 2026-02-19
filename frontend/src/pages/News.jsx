import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './News.css'

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const { t } = useTranslation();

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/news');
            const data = await response.json();
            setNews(data);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    const categories = ['All', ...new Set(news.map(item => item.category))];
    const filteredNews = filter === 'All' ? news : news.filter(item => item.category === filter);

    return (
        <main className="news-page">
            <section className="news-hero">
                <div className="hero-content">
                    <h1>{t('news.title', 'Latest News & Updates')}</h1>
                    <p>{t('news.subtitle', 'Stay informed with the latest developments from PowerNet Edge Solutions')}</p>
                </div>
            </section>
            <section className="news-content">
                <div className="news-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={filter === cat ? 'active' : ''}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="loading">{t('news.loading', 'Loading news...')}</div>
                ) : filteredNews.length === 0 ? (
                    <div className="no-news">{t('news.noNews', 'No news available at the moment.')}</div>
                ) : (
                    <div className="news-grid">
                        {filteredNews.map(item => {
                            <article key={item.id} className="news-card">
                                {item.image && (
                                    <div className="news-image">
                                        <img src={item.image} alt={item.title} />
                                        { item.featured && <span className="featured-badge">Featured</span>}
                                    </div>
                                )}
                                <div className="news-body">
                                    <span className="news-category">{item.category}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt}</p>
                                    <div className="news-meta">
                                        <span className="author">{item.author}</span>
                                        <span className="date">{new Date(item.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </article>
                        })}
                    </div>
                )}
            </section>
        </main>      
    );
};

export default News;