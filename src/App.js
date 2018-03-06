import React from 'react';
import Moment from 'react-moment';

import Loading from './components/Loading';
import WeatherContainer from './components/WeatherContainer';

import './App.css';

// const mockdata = {
//   "coord":
//     {
//       "lon":159,
//       "lat":35
//     },
//     "weather":[
//       { "id":501,
//         "main":"Rain",
//         "description":"light intensity drizzle rain",
//         "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" }
//       ],
//     "base":"stations",
//     "main":{
//       "temp":20,
//       "pressure":1027.45,
//       "humidity":100,
//       "temp_min":20.59,
//       "temp_max":22.59,
//       "sea_level":1027.47,
//       "grnd_level":1027.45
//     },
//     "wind":{
//       "speed":13,
//       "deg":90,
//     },
//     "rain":{ "3h":0.45 },
//     "clouds":{ "all":92 },
//     "dt":1499521932,
//     "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 },
//     "id":0, "name":"Dundee", "cod":200
//   };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      buttonTemp: 'F',
      isCelsius: true,
      time: new Date(),
    }
  }

//STILL SHOWING SHUZENJI( CHINA ) SOMETIMES????????????????????????????????????????????????????????????????????????????/

componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(pos.coords.latitude);
      this.setState({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }, () => {
        //fetch('https://fcc-weather-api.glitch.me/api/current?lat=' + this.state.lat + '&lon=' + this.state.lon)
        fetch('https://fcc-weather-api.glitch.me/api/current?lat=56.482&lon=-2.811')
          .then(response => {
            if(response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong...');
            }
          })
          .then(data => this.setState({
                city: data.name,
                temp: data.main.temp,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max,
                mainDescription: data.weather[0].main,
                detailDescription: data.weather[0].description,
                windSpeed: data.wind.speed,
                windDeg: data.wind.deg,
                id: data.weather[0].id,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                loading: false,
          }))
          .catch(error => this.setState({ error, loading: false }));
      })
    })


      // setTimeout(() => {
      //   this.setState({
      //     city: mockdata.name,
      //     temp: mockdata.main.temp,
      //     minTemp: mockdata.main.temp_min,
      //     maxTemp: mockdata.main.temp_max,
      //     mainDescription: mockdata.weather[0].main,
      //     detailDescription: mockdata.weather[0].description,
      //     windSpeed: mockdata.wind.speed,
      //     windDeg: mockdata.wind.deg,
      //     id: mockdata.weather[0].id,
      //     sunrise: mockdata.sys.sunrise,
      //     sunset: mockdata.sys.sunset,
      //     loading: false,
      //   })
      // }, 2000);

      this.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  convertTemp = (t) => {
    if(this.state.isCelsius) {
      t = t * 1.8 + 32;
    } else {
      t = (t - 32) / 1.8;
    }
    return t;
  }

  toggleTemp = () => {
    const { temp, minTemp, maxTemp, isCelsius } = this.state;
    this.setState({
      buttonTemp: this.state.buttonTemp === 'F' ? 'C' : 'F',
      isCelsius: !isCelsius,
      temp: this.convertTemp(temp),
      minTemp: this.convertTemp(minTemp),
      maxTemp: this.convertTemp(maxTemp),
     })
  }

  startClock = () => {
    const interval = setInterval(() => this.setState({time: new Date(), interval}), 60000);
  }

  render() {
    const { loading, error, buttonTemp, city } = this.state;

    if(error) {
      return <p style={{ background: 'pink'}}>{error.message}</p>
    }

    if(loading) {
      return <Loading />
    } else {
      return (
        <div className='app'>
          <div className="bg-image"></div>
          <button className="tempButton" onClick={this.toggleTemp}>&deg;{buttonTemp}</button>
          <h1 className="city">{city}</h1>
          <WeatherContainer info={{...this.state}}/>
          <Moment
            className="date"
            date={this.state.time}
            interval={60000}
            format="ddd Do MMM H:mm"
          />
        </div>
      );
    }
  }


}

export default App;
