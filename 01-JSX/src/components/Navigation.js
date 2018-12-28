import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact us
            </a>{' '}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
