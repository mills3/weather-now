import React from 'react';

import Moment from 'react-moment';
import styled, { keyframes } from 'styled-components';

import WeatherIcon from './WeatherIcon';

//keyframe animation using styled-components
const moveToDegree = (props) => keyframes`
  from { transform: translateX(-50%) rotate(0deg); }
  to { transform: translateX(-50%) rotate(${props.deg}deg); }
`;

//Create a 'styled-component' to use the keyframe function
const Arrow = styled.div`
  animation: ${moveToDegree} 2s forwards;
  animation-delay: 800ms;
  animation-timing-function: ease-in-out;
`;

const WeatherContainer = ({ info }) => {
  return (
    <div className="weather-container">
      <p className="north points">N</p>
      <p className="east points">E</p>
      <p className="south points">S</p>
      <p className="west points">W</p>

      <div className="angled-lines"></div>
      <div className="angled-lines"></div>
      <div className="angled-lines"></div>
      <div className="angled-lines"></div>

      <div className="weather-inner">
        <h1 className="main-temp">{Math.floor(info.temp)}&deg;{info.buttonTemp === 'F'?'C':'F'}</h1>

        <h3 className="min alt-temp">min: {Math.floor(info.minTemp)}&deg;{info.buttonTemp === 'F'?'C':'F'}</h3>
        <hr className="left-hr"/>
        <div className="sunrise">
          <h3>sunrise:</h3>
          <Moment unix={true} format="H:mm">{info.sunrise}</Moment>
        </div>

        <h3 className="max alt-temp">max: {Math.floor(info.maxTemp)}&deg;{info.buttonTemp === 'F'?'C':'F'}</h3>
        <hr className="right-hr"/>
        <div className="sunset">
          <h3>sunset:</h3>
          <Moment unix={true} format="H:mm">{info.sunset}</Moment>
        </div>

        <WeatherIcon code={info.id}/>

        <h3 className="mainDescription">{info.mainDescription}</h3>
        <h3 className="detailDescription">{info.detailDescription}</h3>
        <h3 className="wind-speed">{Math.floor(info.windSpeed)} mph</h3>
      </div>
      <Arrow deg={info.windDeg}></Arrow>
    </div>
  );
}

export default WeatherContainer;
