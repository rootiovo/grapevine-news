import cloudy from '../../svg/weather/cloudy.svg'
import cloudyNight from '../../svg/weather/cloudy-night-.svg'
import rain from '../../svg/weather/rain.svg'
import sun from '../../svg/weather/sun.svg'
import moon from '../../svg/weather/crescent-moon.svg'
 
 // Map icons to data
 const iconHash = new Map([
    ['clear-day', sun],
    ['partly-cloudy-day', cloudy],
    ['rain', rain],
    ['partly-cloudy-night', cloudyNight],
    ['clear-night', moon],
    ['cloudy', cloudy]
  ]);

export default iconHash;
