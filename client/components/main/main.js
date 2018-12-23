import React, { Component } from 'react';
import './main.css';

import News from '../../components/news/news'
import Weather from '../../components/weather/weather'
import Markets from '../../components/markets/markets'
import Sidebar from '../../components/sidebar/sidebar'

class Main extends Component {
  render () {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <News />
          </div>                                
          <div className="col-md-4">
              <Weather />
              <Markets />
          </div>                    
      </div>      
    </div>      
    );
  }
}

export default Main;
