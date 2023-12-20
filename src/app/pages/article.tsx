import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface ArticleData {
  heroImage: string;
  adBanner: string;
  title: string;
  text: string;
}

const Article: React.FC = () => {
  const { articleName } = useParams<{ articleName: string }>();
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetch(`/api/articles/${articleName}`);
        const data = await response.json();
        setArticleData(data);
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchArticleData();
  }, [articleName]);

  if (!articleData) {
    return <div>Loading...</div>;
  }

  const { heroImage, adBanner, title, text } = articleData;

  return (
    <div>
      <img src={heroImage} alt="Hero Image" />
      <img src={adBanner} alt="Ad Banner" />
      <h1>{title}</h1>
      <p>{text}</p>
      <Link to="/create-table">Create Table</Link>
    </div>
  );
};

export default Article;
