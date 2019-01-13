import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../../components/article/article';
import moment from 'moment';
import './news.css';

class News extends Component {
    render() {

        function sortArticlesByDate(articles){
            return articles.sort((a, b) => moment(b.publishedAt) - moment(a.publishedAt));
        }

        return (
            <div>
                {sortArticlesByDate(this.props.articles).map((article, index) => {
                    return (
                        <Article key={index} article={article} />
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
