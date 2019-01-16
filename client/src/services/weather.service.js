import axios from 'axios';

class Weather {
  static async getWeather() {
    const request = await axios.get('/api/weather');

    return request.data;
  }
}

export default Weather;
