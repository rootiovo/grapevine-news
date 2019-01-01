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
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <i className="fas fa-5x fa-sun"></i>
                    </div>
                    <div className="col-md-4">
                      <div className="current-city-name">Los Angeles</div>
                      <div>Sunny</div>
                      <div>Chance of Rain: 0%</div>
                    </div>
                    <div className="col-md-4">
                      <div className="current-temp">65°</div>
                      <div>68°/53°</div>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">Today</div>
                      <i className="fas fa-3x fa-sun"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">Friday</div>
                      <i className="fas fa-3x fa-cloud-sun"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">Saturday</div>
                      <i className="fas fa-3x fa-cloud-sun-rain"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">Sunday</div>
                      <i className="fas fa-3x fa-poo-storm"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">Monday</div>
                      <i className="fas fa-3x fa-cloud-meatball"></i>
                    </div>
                  </div>   
                </div>                          
              </div>
            </div>
        </div>
    );
  }
}

export default Weather;
