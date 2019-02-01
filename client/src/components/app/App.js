import React, { Component } from 'react';
import './App.css';
import Navigation from '../../components/navigation/navigation';
import Weather from '../../components/weather/weather';
import News from '../../components/news/news';
import NewsService from '../../services/news.service';
import sources from './sources/sources';
import { Provider } from '../../context';


class App extends Component {
  state = {
    queryString: '',
    articles: [],
    isLoading: true,
  };

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
      <Provider>
        <React.Fragment>
          <div className='nav-container'>
            <Navigation
              onFilterTextChange={(text) => { this.searchNews(text); }}
              loading={this.state.isLoading}
              handleCategoryChange={(category) => { this.getNewsByCategory(category); }}
            />
          </div>
          <div className='content-container'>
            <div className='column' />
            <div className='column-news'>
              <News articles={this.state.articles} />
            </div>
            <div className='column-weather'>
              <Weather />
            </div>
          </div>
        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
