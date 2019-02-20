import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, error] = useLocation();
  let content;
  if (!lat && error) content = <div>Error: {error}</div>;
  else if (lat && !error) content = <SeasonDisplay lat={lat} />;
  else content = <Spinner message="Please accept the location request" />;
  return <div className="demo-wrapper">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
