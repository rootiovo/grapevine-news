import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsService from '../../services/news.service'
import Article from '../../components/article/article'
import moment from 'moment'
import './news.css'

class News extends Component {

    constructor(props) {
      super(props)

      this.state = {     
        articles: []
    }
  }

  componentWillMount() {
    this.getNews(null)
}

  async getNews(filter) {
    
    try {
        let articles = await NewsService.getNews(filter)

        articles.sort((a,b) => moment(b.pubDate) - moment(a.pubDate))

        this.setState({
            articles: articles,            
        })
    }
    catch (err) {
        console.log(err)
    }
  }

  render () {
    return (
        <div>
            {this.state.articles.filter(article => article.title.toLowerCase().includes(this.props.filter.toLowerCase())).map((article, index) => {
                return (
                    <Article key={index} article={article} />
                )
            })}
        </div>
  )
  }
}

News.propTypes = {
    articles: PropTypes.array
  }

export default News
