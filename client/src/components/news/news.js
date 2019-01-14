import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../../components/article/article';
import './news.css';

class News extends Component {
    render() {

        return (
            <div>
                {this.props.articles.map((article, index) => {
                    return (
                        article.urlToImage && article.urlToImage !== '' ?
                            <Article key={index} article={article} /> :
                            <div></div>
                    )
                })}
            </div>
        )
    }
};

News.propTypes = {
    articles: PropTypes.array
};

export default News;
