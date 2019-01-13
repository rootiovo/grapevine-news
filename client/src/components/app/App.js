import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation';
import Categories from '../../components/categories/categories';
import Weather from '../../components/weather/weather';
import News from '../../components/news/news';
import NewsService from '../../services/news.service';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            filterString: '',
            queryString: '',
            articles: [],
            isLoading: true
        };
    };

    componentWillMount() {
        this.getNews()
    };

    async getNews() {

        try {
            let articles = await NewsService.getNews()

            this.setState({
                articles: articles,
                isLoading: false
            })
        }
        catch (err) {
            console.log(err)
        }
    };

    async searchNews(queryString) {

        if (queryString !== '') {
            this.setState({
                isLoading: true
            });

            try {
                let articles = await NewsService.searchNews(queryString)

                this.setState({
                    articles: articles,
                    isLoading: false
                });
            }
            catch (err) {
                console.log(err)
            }
        }
    };

    render() {

        return (
            <div className="app-container">
                <Navigation onFilterTextChange={(text) => { this.searchNews(text) }} loading={this.state.isLoading} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Categories />
                        </div>
                        <div className="col-md-6">
                            <News articles={this.state.articles} />
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
