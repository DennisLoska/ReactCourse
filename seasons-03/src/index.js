import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  //gets invoked when component gets rendered the first time only.
  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div className="ui active centered inline loader" />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
