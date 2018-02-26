import React from 'react';

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
        
      </div>
    </div>
  );
}

export default WeatherContainer;
