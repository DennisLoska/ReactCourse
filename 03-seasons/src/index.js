import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setError(err.message)
    );
  }, []);

  let content;
  if (!lat && error) content = <div>Error: {error}</div>;
  else if (lat && !error) content = <SeasonDisplay lat={lat} />;
  else content = <Spinner message="Please accept the location request" />;

  return <div className="demo-wrapper">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
