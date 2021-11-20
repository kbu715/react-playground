import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { NewsListBlock } from './styles';
import axios from 'axios';

export interface ArticleType {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface NewsListProps {
  category: string;
}

const NewsList: React.FC<NewsListProps> = ({ category }) => {
  const [articles, setArticles] = useState<ArticleType[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);

      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchNewsData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>로딩중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article: ArticleType) => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
