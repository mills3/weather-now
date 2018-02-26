import React from 'react';

import Moment from 'react-moment';
import styled, { keyframes } from 'styled-components';

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

const WeatherContainer = () => {
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
        <h1 className="main-temp">22&deg;C</h1>

        <h3 className="min alt-temp">min: 12&deg;C</h3>
        <hr className="left-hr"/>
        <div className="sunrise">
          <h3>sunrise:</h3>
          <Moment unix={true} format="H:mm">{1499451436}</Moment>
        </div>

        <h3 className="max alt-temp">max: 22&deg;C</h3>
        <hr className="right-hr"/>
        <div className="sunset">
          <h3>sunset:</h3>
          <Moment unix={true} format="H:mm">{1499503246}</Moment>
        </div>

        <img className="icon" src="http://fillmurray.com/200/200" alt="" />

        <h3 className="description">light rain</h3>
        <h3 className="wind-speed">10 mph</h3>
      </div>
      <Arrow deg={359}></Arrow>
    </div>
  );
}

export default WeatherContainer;
