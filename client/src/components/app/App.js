import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation';
import Categories from '../../components/categories/categories';
import Weather from '../../components/weather/weather';
import News from '../../components/news/news';
import NewsService from '../../services/news.service';
import moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            filterString: '',
            queryString: '',
            articles: []
        };
    };

    componentWillMount() {
        this.getNews(null)
    };

    async getNews(filter) {

        try {
            let articles = await NewsService.getNews(filter)

            articles.sort((a, b) => moment(b.pubDate) - moment(a.pubDate))

            this.setState({
                articles: articles,
            })
        }
        catch (err) {
            console.log(err)
        }
    };

    async searchNews(queryString) {

        try {
            let articles = await NewsService.searchNews(queryString)

            articles.sort((a, b) => moment(b.pubDate) - moment(a.pubDate))

            this.setState({
                articles: articles,
            })
        }
        catch (err) {
            console.log(err)
        }
    };

    render() {

        return (
            <div className="app-container">
                <Navigation onFilterTextChange={(text) => {this.searchNews(text)}} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Categories />
                        </div>
                        <div className="col-md-6">
                            <News articles={this.state.articles} filter={this.state.filterString} />
                        </div>
                        <div className="col-md-4">
                            <Weather />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

App.propTypes = {
    filterString: PropTypes.string
};


export default App;
