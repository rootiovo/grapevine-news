import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeatherService from '../../services/weather.service'
import './weather.css'
import moment from 'moment'

class Weather extends Component {

  constructor(props) {
    super(props)

    this.state = {     
      weather: null
    }
  }

componentWillMount() {
  //get weather data for current geolocation
  navigator.geolocation.getCurrentPosition(position => {
    let coords = position

    this.getWeather(coords.latitude,coords.longitude)
  });
}

async getWeather(lat,long) {
  try {
      let weatherData = await WeatherService.getWeather(lat,long)

      this.setState({
        weather: weatherData          
      })
  }
  catch (err) {
      console.log(err)
  }
}

  render () { 
    //Map font awesome icons to dark sky data
    let iconHash = new Map([
        ['clear-day', 'fa-sun'],
        ['partly-cloudy-day', 'fa-cloud-sun'],
        ['rain', 'fa-cloud-rain'],
        ['partly-cloudy-night', 'fa-cloud-moon'],
        ['clear-night', 'fa-moon']
    ])

    return (
          <div className="weather">
            <div className="card">
              <div className="card-header">
                <i className="fas fa-cloud-sun"></i>&nbsp;<span>Local Weather</span>
              </div>
              <div className="card-body">
              {this.state.weather &&
                  <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <i className={`fas fa-5x ${iconHash.get(this.state.weather.currently.icon)}`}></i>
                    </div>
                    <div className="col-md-4">
                      <div className="current-city-name">
                      {this.state.weather.timezone.replace('_', ' ').split('/')[1]}
                      </div>
                      <div>{this.state.weather.currently.summary}</div>
                      <div>{'Humidity: ' +  this.state.weather.currently.humidity + '%'}</div>
                      <div>
                      <a href="https://darksky.net/poweredby/">
                        <img 
                        width="60%" 
                        height="60%" 
                        src="https://darksky.net/dev/img/attribution/poweredby.png" />
                      </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="current-temp">
                        {Math.round(this.state.weather.currently.temperature)}°
                      </div>
                      <div className="current-high-low">
                        {Math.round(this.state.weather.daily.data[0].temperatureMax)}°&nbsp;
                        <i className="fas fa-arrow-up temp-high"></i>
                        <br />
                        {Math.round(this.state.weather.daily.data[0].temperatureMin)}°&nbsp;
                        <i className="fas fa-arrow-down blue temp-low"></i>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().format('ddd')}</div>
                      <i className={`fas fa-3x ${iconHash.get(this.state.weather.daily.data[0].icon)}`}></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(1, 'days').format('ddd')}</div>
                      <i className={`fas fa-3x ${iconHash.get(this.state.weather.daily.data[1].icon)}`}></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(2, 'days').format('ddd')}</div>
                      <i className={`fas fa-3x ${iconHash.get(this.state.weather.daily.data[2].icon)}`}></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(3, 'days').format('ddd')}</div>
                      <i className={`fas fa-3x ${iconHash.get(this.state.weather.daily.data[3].icon)}`}></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(4, 'days').format('ddd')}</div>
                      <i className={`fas fa-3x ${iconHash.get(this.state.weather.daily.data[4].icon)}`}></i>
                    </div>                    
                  </div>  
                  <div className="row">
                    <div className="alert alert-info weather-summary" role="alert">
                      <i className="fas fa-info-circle"></i>&nbsp;
                      {this.state.weather.daily.summary}
                    </div>
                  </div> 
                </div>
              }                                      
              </div>
            </div>
        </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.object
};

export default Weather
