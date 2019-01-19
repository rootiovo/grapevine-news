import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import WeatherService from '../../services/weather.service';
import iconHash from './icon-map';
import './weather.css';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    };
  }

  componentWillMount() {
    // get weather data for current geolocation
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position;

      this.getWeather(coords.latitude, coords.longitude);
    });
  }

  async getWeather(lat, long) {
    try {
      const weatherData = await WeatherService.getWeather(lat, long);

      this.setState({
        weather: weatherData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Paper elevation={1} className='weather'>
          {this.state.weather &&
            <div className='container-weather'>
              <div className='container-current'>
                <div className='column-weather'>
                  <img
                    src={iconHash.get(this.state.weather.currently.icon)}
                    height='80'
                    width='80'
                    alt='/'
                  />
                </div>
                <div className='column-weather'>
                  <div className='current-city-name'>
                    {this.state.weather.timezone.replace('_', ' ').split('/')[1]}
                  </div>
                  <div>{this.state.weather.currently.summary}</div>
                  <div>{`'Humidity: '  ${this.state.weather.currently.humidity}  '%'`}</div>
                </div>
                <div className='column-weather'>
                  <div className='current-temp'>
                    {Math.round(this.state.weather.currently.temperature)}°
                  </div>
                  <div className='current-high-low'>
                    {Math.round(this.state.weather.daily.data[0].temperatureMax)}°&nbsp;
                    <i className='fas fa-arrow-up temp-high' />
                    <br />
                    {Math.round(this.state.weather.daily.data[0].temperatureMin)}°&nbsp;
                    <i className='fas fa-arrow-down blue temp-low' />
                  </div>
                </div>
              </div>
              <hr />
              <div className='container-forecast'>
                <div className='column-forecast'>
                  <div className='forecast-day'>{moment().format('ddd')}</div>
                  <img
                    src={iconHash.get(this.state.weather.daily.data[0].icon)}
                    height='50'
                    width='50'
                    alt='/'
                  />
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>{moment().add(1, 'days').format('ddd')}</div>
                  <img src={iconHash.get(this.state.weather.daily.data[1].icon)} height='50' width='50' alt='/' />
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>{moment().add(2, 'days').format('ddd')}</div>
                  <img src={iconHash.get(this.state.weather.daily.data[2].icon)} height='50' width='50' alt='/' />
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>{moment().add(3, 'days').format('ddd')}</div>
                  <img src={iconHash.get(this.state.weather.daily.data[3].icon)} height='50' width='50' alt='/' />
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>{moment().add(4, 'days').format('ddd')}</div>
                  <img src={iconHash.get(this.state.weather.daily.data[4].icon)} height='50' width='50' alt='/' />
                </div>
              </div>
              <div className='weather-summary'>
                <i className='fas fa-info-circle' />&nbsp;
                {this.state.weather.daily.summary}
              </div>
            </div>
          }
        </Paper>
      </React.Fragment>
    );
  }
}

export default Weather;
