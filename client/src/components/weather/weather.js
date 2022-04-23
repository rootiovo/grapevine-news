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

  componentDidMount() {
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
          {this.state.weather && (
            <div className='container-weather'>
              <div className='weather-header'>
                {this.state.weather.timezone.replace('_', ' ').split('/')[1]}
              </div>
              <hr />
              <div className='container-current'>
                <div className='column-current' style={{ marginRight: '40%' }}>
                  <img
                    className='current-weather-icon'
                    src={iconHash.get(this.state.weather.currently.icon)}
                    height='100'
                    width='100'
                    alt='/'
                  />
                </div>
                <div className='column-current'>
                  <div className='current-temp'>
                    {Math.round(this.state.weather.currently.temperature)}°
                  </div>
                  <div className='current-status'>
                    {this.state.weather.currently.summary}
                  </div>
                </div>
              </div>
              <hr />
              <div className='container-forecast'>
                <div className='column-forecast'>
                  <div className='forecast-day'>Today</div>
                  <img
                    src={iconHash.get(this.state.weather.daily.data[0].icon)}
                    height='50'
                    width='50'
                    alt='/'
                  />
                  <p className='forecast-high'>
                    {Math.round(
                      this.state.weather.daily.data[0].temperatureHigh,
                    )}
                    °
                  </p>
                  <p className='forecast-low'>
                    {Math.round(
                      this.state.weather.daily.data[0].temperatureLow,
                    )}
                    °
                  </p>
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>
                    {moment().add(1, 'days').format('ddd')}
                  </div>
                  <img
                    src={iconHash.get(this.state.weather.daily.data[1].icon)}
                    height='50'
                    width='50'
                    alt='/'
                  />
                  <p className='forecast-high'>
                    {Math.round(
                      this.state.weather.daily.data[1].temperatureHigh,
                    )}
                    °
                  </p>
                  <p className='forecast-low'>
                    {Math.round(
                      this.state.weather.daily.data[1].temperatureLow,
                    )}
                    °
                  </p>
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>
                    {moment().add(2, 'days').format('ddd')}
                  </div>
                  <img
                    src={iconHash.get(this.state.weather.daily.data[2].icon)}
                    height='50'
                    width='50'
                    alt='/'
                  />
                  <p className='forecast-high'>
                    {Math.round(
                      this.state.weather.daily.data[2].temperatureHigh,
                    )}
                    °
                  </p>
                  <p className='forecast-low'>
                    {Math.round(
                      this.state.weather.daily.data[2].temperatureLow,
                    )}
                    °
                  </p>
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>
                    {moment().add(3, 'days').format('ddd')}
                  </div>
                  <img
                    src={iconHash.get(this.state.weather.daily.data[3].icon)}
                    height='50'
                    width='50'
                    alt='/'
                  />
                  <p className='forecast-high'>
                    {Math.round(
                      this.state.weather.daily.data[3].temperatureHigh,
                    )}
                    °
                  </p>
                  <p className='forecast-low'>
                    {Math.round(
                      this.state.weather.daily.data[3].temperatureLow,
                    )}
                    °
                  </p>
                </div>
                <div className='column-forecast'>
                  <div className='forecast-day'>
                    {moment().add(4, 'days').format('ddd')}
                  </div>
                  <img
                    src={iconHash.get(this.state.weather.daily.data[4].icon)}
                    height='50'
                    width='50'
                    alt='/'
                  />
                  <p className='forecast-high'>
                    {Math.round(
                      this.state.weather.daily.data[4].temperatureHigh,
                    )}
                    °
                  </p>
                  <p className='forecast-low'>
                    {Math.round(
                      this.state.weather.daily.data[4].temperatureLow,
                    )}
                    °
                  </p>
                </div>
              </div>
              <div className='weather-summary'>
                <i className='fas fa-info-circle' />
                &nbsp;
                {this.state.weather.daily.summary}
              </div>
              {/* <hr />
              <div>
                <span><a href='/'>C</a> | <strong><a href='/'>F</a></strong> | <a href='/'>K</a></span>
              </div> */}
            </div>
          )}
        </Paper>
      </React.Fragment>
    );
  }
}

export default Weather;
