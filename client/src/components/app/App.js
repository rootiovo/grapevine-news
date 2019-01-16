import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from '../../components/navigation/navigation';
import Weather from '../../components/weather/weather';
import News from '../../components/news/news';
import NewsService from '../../services/news.service';
import sources from './sources/sources';

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryString: '',
      articles: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    this.getNews();
  }

  async getNews() {
    try {
      const articlesAll = await NewsService.getNews(sources.toString());

      this.setState({
        articles: articlesAll,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getNewsByCategory(category) {
    try {
      const articlesByCategory = await NewsService.getNewsByCategory(category.toLowerCase().trim());
      this.setState({
        articles: articlesByCategory,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async searchNews(queryString) {
    if (queryString !== '') {
      this.setState({
        isLoading: true,
      });

      try {
        const articlesBySearch = await NewsService.searchNews(queryString, sources.toString());

        this.setState({
          articles: articlesBySearch,
          isLoading: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <div className='container-fluid app'>
        <Navigation
          onFilterTextChange={(text) => { this.searchNews(text); }}
          loading={this.state.isLoading}
          handleCategoryChange={(category) => { this.getNewsByCategory(category); }}
        />
        <div className='container-fluid app'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-6'>
              <News articles={this.state.articles} />
            </div>
            <div className='col-md-4'>
              <Weather />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
