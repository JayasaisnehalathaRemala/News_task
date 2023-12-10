// NewsList.js
import React from 'react';
import NewsItem from './Newsitem';

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((article) => (
        <NewsItem article={article} />
      ))}
    </div>
  );
};

export default NewsList;
