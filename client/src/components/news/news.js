import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../../components/article/article';
import './news.css';

class News extends Component {

    render() {
        return (
            <div>
                {this.props.articles.filter(article => article.title.toLowerCase().includes(this.props.filter.toLowerCase())).map((article, index) => {
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
