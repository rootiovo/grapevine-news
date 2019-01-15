import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation';
import Weather from '../../components/weather/weather';
import News from '../../components/news/news';
import NewsService from '../../services/news.service';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            let articles = await NewsService.getNews('cnn,bbc-news,reuters,associated-press,the-wall-street-journal,ars-technica,the-washington-post,the-new-york-times')

            this.setState({
                articles: articles,
                isLoading: false
            })
        }
        catch (err) {
            console.log(err)
        }
    };

    async searchNews(queryString,sources) {

        if (queryString !== '') {
            this.setState({
                isLoading: true
            });

            try {
                let articles = await NewsService.searchNews(queryString,'cnn,bbc-news,reuters,associated-press,the-wall-street-journal,ars-technica,the-washington-post')

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
            <div className="container-fluid app">
                <Navigation onFilterTextChange={(text) => { this.searchNews(text) }} loading={this.state.isLoading} />
                <div className="container-fluid app">
                    <div className="row">
                        <div className="col-md-2"></div>
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
