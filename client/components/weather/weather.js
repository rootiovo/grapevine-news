import React, { Component } from 'react'
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

componentDidMount(){
  console.log(this.state)
}

componentDidUpdate(){
  console.log(this.state)
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
                      <i className="fas fa-5x fa-sun"></i>
                    </div>
                    <div className="col-md-4">
                      <div className="current-city-name">
                      {this.state.weather.timezone.replace('_', ' ').split('/')[1]}
                      </div>
                      <div>{this.state.weather.currently.summary}</div>
                      <div>{'Humidity: ' +  this.state.weather.currently.humidity + '%'}</div>
                    </div>
                    <div className="col-md-4">
                      <div className="current-temp">
                        {Math.round(this.state.weather.currently.temperature)}°
                      </div>
                      <div className="current-high-low">
                        {Math.round(this.state.weather.daily.data[0].temperatureMax)}°&nbsp;
                        <i className="fas fa-arrow-up red"></i>
                        <br />
                        {Math.round(this.state.weather.daily.data[0].temperatureMin)}°&nbsp;
                        <i className="fas fa-arrow-down blue"></i>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().format('ddd')}</div>
                      <i className="fas fa-3x fa-sun"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(1, 'days').format('ddd')}</div>
                      <i className="fas fa-3x fa-cloud-sun"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(2, 'days').format('ddd')}</div>
                      <i className="fas fa-3x fa-cloud-sun-rain"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(3, 'days').format('ddd')}</div>
                      <i className="fas fa-3x fa-poo-storm"></i>
                    </div>
                    <div className="col-xs-2 col-half-offset">
                      <div className="forecast-day">{moment().add(4, 'days').format('ddd')}</div>
                      <i className="fas fa-3x fa-cloud-meatball"></i>
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

export default Weather
