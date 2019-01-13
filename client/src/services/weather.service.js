import axios from 'axios';

class Weather {
    static async getWeather() {
        let request = await axios.get('/api/weather')

        return request.data
    }
};

export default Weather;
