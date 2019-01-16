import React from 'react';
import Article from '../../components/article/article';
import './news.css';

function News(props) {
  return (
    <div>
      {props.articles.map((article, index) => {
        return (
          article.urlToImage && article.urlToImage !== '' ?
            <Article key={index} article={article} />
            :
            <div />
        );
      })}
    </div>
  );
}

export default News;
