import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Config from '../config';

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + new Config().getAccess()
      }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        Images found: {this.state.images.length}
      </div>
    );
  }
}

export default App;

/* in order to restore Config.js:

class Config {
  constructor() {
    this.access =
      'your access-key';
  }
  getAccess() {
    return this.access;
  }
}

export default Config;

*/
