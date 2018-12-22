import React, { Component } from 'react';
import './main.css';

import News from '../../components/news/news'
import Weather from '../../components/weather/weather'
import Markets from '../../components/markets/markets'

class Main extends Component {
  render () {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-md-8 offset-1">
            <News />
          </div>                                
          <div className="col-md-3">
              <Weather />
              <Markets />
          </div>                    
      </div>      
    </div>      
    );
  }
}

export default Main;
