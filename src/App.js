import React from 'react';

import Loading from './components/Loading';
import WeatherContainer from './components/WeatherContainer';

import './App.css';

const mockData = {
  "coord":
    {
      "lon":159,
      "lat":35
    },
    "weather":[
      { "id":904,
        "main":"Rain",
        "description":"light rain",
        "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" }
      ],
    "base":"stations",
    "main":{
      "temp":22.59,
      "pressure":1027.45,
      "humidity":100,
      "temp_min":20.59,
      "temp_max":22.59,
      "sea_level":1027.47,
      "grnd_level":1027.45
    },
    "wind":{
      "speed":8.12,
      "deg":246.503
    },
    "rain":{ "3h":0.45 },
    "clouds":{ "all":92 },
    "dt":1499521932,
    "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 },
    "id":0, "name":"Dundee", "cod":200
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(pos => {
    //   console.log(pos.coords.latitude);
    //   this.setState({
    //     lat: pos.coords.latitude,
    //     lon: pos.coords.longitude,
    //   }, () => {
    //     fetch('https://fcc-weather-api.glitch.me/api/current?lat=' + this.state.lat + '&lon=' + this.state.lon)
    //       .then(response => {
    //         if(response.ok) {
    //           return response.json();
    //         } else {
    //           throw new Error('Something went wrong...');
    //         }
    //       })
    //       .then(data => this.setState({ info: data, loading: false}))
    //       .catch(error => this.setState({ error, loading: false }));
    //   })
    // })

      setTimeout(() => {
        this.setState({
          info: mockData,
          loading: false,
        })
      }, 2000);
  }

  render() {
    const { info, loading, error } = this.state;

    if(error) {
      return <p>{error.message}</p>
    }

    if(loading) {
      return <Loading />
    } else {
      return (
        <div className='app'>
          <div className="bg-image"></div>
          <h1 className="city">{info.name}</h1>
          <WeatherContainer info={info}/>
          <h1 className="date">Wed 19:08</h1>
        </div>
      );
    }
  }


}

export default App;
