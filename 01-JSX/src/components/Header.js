import React from 'react';
import Navigation from './Navigation';

const Header = props => {
  return (
    <header>
      <div className="company">Primetag</div>
      <Navigation />
    </header>
  );
};

export default Header;
