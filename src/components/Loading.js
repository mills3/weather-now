import React from 'react';

const letters = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'];

const Loading = () => {
  return (
    <div className="loading">
      {
        letters.map((letter, i) => {
          return <h1 key={i}>{letter}</h1>
        })
      }
    </div>
  );
}

export default Loading;
