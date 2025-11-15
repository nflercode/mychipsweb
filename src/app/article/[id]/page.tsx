import React, {  } from 'react';
interface ArticleData {
  heroImage: string;
  adBanner: string;
  title: string;
  text: string;
}

const Article: React.FC<{ params: any }> = ({ params }) => {
  const { id } = params;
  return <p>Post: {id}</p>

};

export default Article;
