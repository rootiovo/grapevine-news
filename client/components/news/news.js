import React, { Component } from 'react';
import './news.css';

import NewsService from 'services/news.service';
import Article from '../../components/article/article';

class News extends Component {

    constructor(props) {
      super(props);

      this.state = {     
        articles: [] 
    };
  }

  componentWillMount() {
    this.getFeed();
}

  async getFeed() {
    
    try {
        let articles = await NewsService.getNews();

        this.setState({
            articles: articles,
        });
    }
    catch (err) {
        console.log(err);
    }
  }

  render () {
    return (
        <div>
            {this.state.articles.map((article, index) => {
                return (
                    <Article key={index} article={article} />
                );
            })}
        </div>
  );
  }
}

export default News;
