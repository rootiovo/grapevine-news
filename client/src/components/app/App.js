import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

//Components
import Navigation from '../../components/navigation/navigation'
import Categories from '../../components/categories/categories'
import Weather from '../../components/weather/weather'
// import Markets from '../../components/markets/markets'
import News from '../../components/news/news'

class App extends Component {

    constructor () {
        super();
        this.state = {
            filterString: ''
        }
    }

  render() {

    return (
          <div className="app-container">
            <Navigation onFilterTextChange={text => {this.setState({filterString: text})}}/>                                 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Categories />
                    </div>
                    <div className="col-md-6">
                        <News filter={this.state.filterString} />
                    </div>                                
                    <div className="col-md-4">
                        <Weather />
                        {/* <Markets /> */}
                    </div>                    
                </div>      
            </div>                
          </div>     
    )
  }
}

App.propTypes = {
    filterString: PropTypes.string
  }


export default App;
