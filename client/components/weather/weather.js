import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {

  constructor(props) {
    super(props);
}

  render () {
    return (
          <div className="weather">
            <div className="card">
              <div className="card-header">
                <i className="fas fa-cloud-sun"></i>&nbsp;<span>Weather</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Los Angeles</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed massa orci, pharetra vitae venenatis a,
                suscipit et sem. Cras mauris lorem, pulvinar vitae ex eu,
                bibendum consectetur ligula.</p>
                <a href="/" className="btn btn-primary btn-sm">Lorem Ipsum</a>
              </div>
            </div>
        </div>
    );
  }
}

export default Weather;
