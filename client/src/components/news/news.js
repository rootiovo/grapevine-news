import React from 'react';
import Article from '../../components/article/article';
import './news.css';

function News(props) {
  return (
    <React.Fragment>
      {props.articles.map((article, index) => {
        return (
          article.urlToImage && article.urlToImage !== '' ?
            <Article key={index} article={article} />
            :
            <div />
        );
      })}
    </React.Fragment>
  );
}

export default News;
