// NewsItem.js
import React from 'react';
import './Newsitem.css'

const NewsItem = ({ article }) => {
  const { title, description, url,source,urlToImage ,author,content} = article;
  console.log(article)
  return (

<div className="card">
  <img src={urlToImage} classNameName="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-text">{source.name}</h6>
  </div>
  <div className="card-body">
  <p className="card-text">{description}</p>
    <a href={url} className="card-link" target='_blank'>view more </a>
    <div className="additional-info">
          <p> {author}</p>
          <p> {content}</p>
        </div>
  </div>
</div>
  );
};

export default NewsItem;
