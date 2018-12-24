import React, { Component } from 'react';
import './article.css';

class Article extends Component {
    
    constructor(props) {
        super(props);
    }

    render () {

        let article = this.props.article;

        return (
        <div className="card">            
            <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.contentSnippet}</p>
            <a href={article.link} className="btn btn-primary">Full Article</a>
            </div>
        </div>
        );
    }
}

export default Article;
